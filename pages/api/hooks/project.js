import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async(req, res) => {
    try {
        const signature = req.headers[SIGNATURE_HEADER_NAME].toString()
        if (isValidSignature(
            JSON.stringify(req.body),
            signature,
            process.env.SANITY_WEBHOOK_SECRET
            )
        ) 
            return res.status(401).json({msg: 'Invalid Request!!'})


        const {slug} = req.body

        await res.revalidate(`/portfolio/remodels/`)
        await res.revalidate(`/portfolio/custom-homes/`)
        await res.revalidate(`/portfolio/${slug}`)
        

        console.log("slug: ", slug)
        res.status(200).json({msg: 'Porduct pages revlaidated.'});

    } catch (error) {
        res.status(200).json({err:'Something went wrong!'})
    }
}

export default handler;