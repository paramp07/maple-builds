import { NextSeo } from "next-seo";

export default function TermsConditionsPage(props) {
  const SEO = {
    title: "Terms And Conditions - Maple Builds",
    description: "Learn about our Privacy Policy",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="font-dmsans pt-20">
        <h1 className="my-16 text-4xl font-bold text-center">
          Terms and Conditions
        </h1>
        <div className="px-2 py-4 bg-[#ECECEC]">
          <div className="w-[85%] mt-10 my-4 mx-auto space-y-8 text-[#151515]">
            <div>
              <h4 className="font-bold">Terms of Use</h4>
              <p className="text-[#7D7D7D] leading-9">Welcome to the internet site of Maple Builds LLC.</p>
            </div>
            <div>
              <p className="text-[#7D7D7D] leading-9">
                Please read these Terms carefully so that you understand the
                conditions for accessing and using the Site. We provide the
                information, services, text, graphics, links or other material
                on this site to you, conditioned on your acceptance, without
                modification, of these Terms. If you do not agree to the Terms,
                please do not use our Site.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Privacy Policy</h4>
              <p className="text-[#7D7D7D] leading-9">
                By using this site, you consent to our collection and use of
                Personal Information as discussed in our Privacy Policy, which
                is hereby incorporated into these Terms. A copy of the Privacy
                Policy can be accessed here: Privacy Policy.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Permitted Use</h4>
              <p className="text-[#7D7D7D] leading-9">
                This Site is intended to provide information and services for
                your personal use; neither Maple Builds LLC nor any of its
                affiliates is engaged in rendering legal or other professional
                services or advice. We grant you a limited, nonexclusive,
                revocable license to make personal and non-commercial use of the
                Site. This license does not include the right to modify,
                reproduce, copy, or resell any of the content of the Site; to
                bypass any technical measures used to prevent or restrict access
                to any portion of the Site; to use any data mining, robots, or
                similar automated data gathering and extraction tools to access
                the Site; to violate or attempt to violate the security of the
                Site; or to interfere with or attempt to interfere with the
                proper working of the Site.
              </p>
            </div>
            <div>
              <p className="text-[#7D7D7D] leading-9">
                You agree to use this Site only for lawful purposes and in
                accordance with these Terms. You acknowledge that your use of
                this site is at our sole discretion, and your license to use the
                site may be terminated by us at any time. We reserve the right,
                in our sole discretion, to refuse service to anyone and to block
                or prevent your future access to and use of this site.{" "}
              </p>
            </div>
            <div>
              <h4 className="font-bold">
                Submission of Content and User Activity
              </h4>
              <p className="text-[#7D7D7D] leading-9">
                The Site may have features that allow users to comment and/or to
                upload materials. You understand that all information,
                communications, data, text, music, sound, photographs, graphics,
                video, messages or other materials (“Content”) are the sole
                responsibility of the person from which such Content originated.
                This means that you are entirely responsible for any Content you
                upload, transmit, or otherwise make available through the Site.{" "}
              </p>
            </div>
            <div>
              <p className="text-[#7D7D7D] leading-9">
                You represent and warrant that you own or otherwise control the
                rights to any Content that you provide through the Site; that
                use of the Content you provide does not violate the intellectual
                property rights or any other rights of any third parties, and
                that use of the Content you provide will not cause injury to any
                person or entity. In line with, and without limiting, the
                foregoing, you specifically agree that you will not (a) provide
                any Content that is unlawful (according to local, state, federal
                or international law) or any Content that advocates illegal
                activity; (b) provide any Content that is defamatory, false or
                libelous, or that contains unlawful, harmful, threatening,
                harassing, discriminatory, abusive, profane, pornographic, or
                obscene material; (c) provide any Content that you do not have a
                right to provide under law or under a contractual or fiduciary
                relationship; (d) provide any Content that contains software
                viruses or other harmful devices; or (e) impersonate any other
                person or entity in order to disguise the origin of any Content
                you provide.
              </p>
            </div>
            <div>
              <p className="text-[#7D7D7D] leading-9">
                You hereby grant us a royalty-free, non-exclusive right and
                license, perpetual and irrevocable, to use, display, edit, or
                delete the Content to provide services on the Site and for all
                other lawful purposes, including advertising. Any communications
                you send to us via the Site are non-confidential.{" "}
              </p>
            </div>
            <div>
              <h4 className="font-bold">Trademarks and Copyrights</h4>
              <p className="text-[#7D7D7D] leading-9">
                The trademarks, trade dress, logos, and service marks displayed
                on this Site are owned by Maple Builds LLC and third parties.
                Nothing contained on this Site may be construed as granting, by
                implication, estoppel, or otherwise, any right or license to use
                any trademark.
              </p>
            </div>
            <div>
              <p className="text-[#7D7D7D] leading-9">
                All content on the Site, including without limitation text,
                photographs, graphics, layout, and design, is owned by Maple
                Builds LLC, or we have been granted permission to use the
                content. Nothing contained on this Site may be construed as
                granting, by implication, estoppel, or otherwise, any right or
                license to use any copyrighted material on the Site.
                Notwithstanding the foregoing, you may download a single copy of
                the content on the Site for your personal, noncommercial use,
                provided all copyright and other proprietary notices are kept
                intact and provided that you do not modify the content in any
                manner.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
