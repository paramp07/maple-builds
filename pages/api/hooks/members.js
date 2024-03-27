import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async(req, res) => {
    try {
        const signature = req.headers[SIGNATURE_HEADER_NAME]
        if (!isValidSignature(
            JSON.stringify(req.body),
            signature,
            process.env.SANITY_WEBHOOK_SECRET
        ))return res.status(401).json({msg:'Invalid Request!!'})

        // Revalidates the ABOUT page.
        await res.revalidate(`/about`)
        res.status(200).json({msg: 'Product pages revlaidated.'});

    } catch (error) {
        res.status(200).json({err:'Something went wrong!'})
    }
}

export default handler;
