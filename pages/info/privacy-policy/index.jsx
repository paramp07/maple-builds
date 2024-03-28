import { NextSeo } from "next-seo";

export default function PrivacyPolicyPage(props) {
  const SEO = {
    title: 'Privacy Policy - Maple Builds',
    description: 'Learn about our Privacy Policy',
}
  return (
    <>
      <NextSeo {...SEO} />
      <div>
          <p>Privacy Policy</p>
      </div>
    </>
  );
}






