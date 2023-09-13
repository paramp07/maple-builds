import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";
import { client } from "@/src/app/lib/sanity";

const log = (msg, error) =>
  console[error ? 'error' : 'log'](`[revalidate] ${msg}`)


async function readBody(readable) {
    const chunks = []
    for await (const chunk of readable) {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks).toString('utf8')
  }

const handler = async(req, res) => {
    // try {
        const signature = req.headers[SIGNATURE_HEADER_NAME]
        // const signature = req.headers[SIGNATURE_HEADER_NAME].toString()
        const body = await readBody(req)
        if (
          !isValidSignature(
            body,
            signature,
            process.env.SANITY_WEBHOOK_SECRET?.trim()
          )
        ) {
          const invalidSignature = 'Invalid signature'
          log(invalidSignature, true)
          res.status(401).json({ success: false, message: invalidSignature })
          return
        }
        const jsonBody = JSON.parse(body)
        const { _id: id, _type } = jsonBody
        if (typeof id !== 'string' || !id) {
          const invalidId = 'Invalid _id'
          log(invalidId, true)
          return res.status(400).json({ message: invalidId })
        }
        log(`Querying post slug for _id '${id}', type '${_type}' ..`)
        const slug = await client.fetch(getQueryForType(_type), { id })
        const slugs = (Array.isArray(slug) ? slug : [slug]).map(
          (_slug) => `/portfolio/${_slug}`
        )
        const staleRoutes = ['/', ...slugs]

        try {
            await Promise.all(staleRoutes.map((route) => res.revalidate(route)))
            const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`
            log(updatedRoutes)
            return res.status(200).json({ message: updatedRoutes })
          } catch (err) {
            log(err.message, true)
            return res.status(500).json({ message: err.message })
        }

    //     await res.revalidate(`/portfolio/${slug}`)
    //     await res.revalidate(`/portfolio/remodels/`)
    //     await res.revalidate(`/portfolio/custom-homes/`)

    //     res.status(200).json({msg: 'Porduct pages revlaidated.'});

    // } catch (error) {
    //     res.status(500).json({err:'Something went wrong!'})
    // }
}

export default handler;