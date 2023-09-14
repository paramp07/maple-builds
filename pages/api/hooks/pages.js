import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async(req, res) => {
    console.log(req)
    try {
        const signature = req.headers[SIGNATURE_HEADER_NAME]
        if (!isValidSignature(
            JSON.stringify(req.body),
            signature,
            process.env.SANITY_WEBHOOK_SECRET
        ))return res.status(401).json({msg:'Invalid Request!!'})


        await res.revalidate(`/about`)
        res.status(200).json({msg: 'Porduct pages revlaidated.'});

    } catch (error) {
        res.status(200).json({err:'Something went wrong!'})
    }
}

export default handler;