import { parseBody } from "next-sanity/webhook"

// Export the config from next-sanity to enable validating the request body signature properly
export { config } from "next-sanity/webhook"

export default async function revalidate(req, res) {
  try {
    const { isValidSignature, body } = await parseBody(
      req,
      process.env.SANITY_WEBHOOK_SECRET
    )

    if (!isValidSignature) {
      const message = "Invalid signature"
      return res.status(401).json({ message, isValidSignature, body })
    }

    const staleRoute = `/${body.slug.current}`
    await res.revalidate(staleRoute)
    const message = `Updated route: ${staleRoute}`
    return res.status(200).json({ message, body })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: err.message })
  }
}
