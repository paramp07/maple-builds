import { ContactForm } from "@/components/component/contact-form";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MenuContext } from "@/components/layout/menuContext";
import {
  translate,
  fadeUp,
  reveal,
  textFadeUp,
} from "@/animations/pageAnimations";
import { useRef } from "react";

export default function ContactPage() {
  const { menuExited } = useContext(MenuContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    if (menuExited) {
      setShouldAnimate(true);
    }
  }, [menuExited]);

  console.log('Render - menuExited:', menuExited, 'shouldAnimate:', shouldAnimate);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <>
      <AnimatePresence mode="wait">
        <section className="pt-[10rem] font-mulish">
          <section>
            <div className="w-[90%] mx-auto">
              <div className="font-mulish">
                <div className="overflow-hidden">
                  <motion.h2
                    variants={translate}
                    initial="initial"
                    animate={shouldAnimate ? "animate" : "initial"}
                    className="overflow-hidden uppercase text-neutral-600"
                  >
                    Lets get in touch
                  </motion.h2>
                </div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={fadeUp}
                    initial="initial"
                    animate={shouldAnimate ? "animate" : "initial"}
                    className="text-6xl mt-3  font-semibold text-neutral-800 tracking-[-4px]"
                  >
                    Contact Us
                  </motion.h1>
                </div>
              </div>
            </div>
          </section>
          <motion.section
            variants={textFadeUp}
            initial="initial"
            whileInView={shouldAnimate ? "animate" : "initial"}
            viewport={{ once: true }}
            className="w-[90%] mt-28 mx-auto text-lg flex-col flex gap-6"
          >
            <p className="font-light text-gray-600">
              We’d love to hear from you.
            </p>
            <div className="flex flex-col gap-6 font-light text-neutral-700">
              <div>
                <div className="flex items-center gap-3">
                  <p className="">Number</p>
                  <Phone
                    className="fill-neutral-400"
                    stroke="false"
                    size={17}
                  />
                </div>
                <div className="text-neutral-500">
                  <p>(214) 270 1454</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p>Email</p>
                  <Mail
                    strokeWidth={2}
                    size={17}
                    className="stroke-neutral-400"
                  />
                </div>
                <div className="text-neutral-500">
                  <p>hello@maplebuilds.com</p>
                </div>
              </div>
            </div>
          </motion.section>
          <section className="w-[90%] mx-auto max-w-4xl mt-6">
            <motion.div
              variants={reveal}
              initial="initial"
              animate={shouldAnimate ? "animate" : "initial"}
              ref={container}
              className="relative overflow-hidden aspect-[5/7]"
            >
              <motion.div
                style={{ y }}
                className="absolute inset-0 h-[120%] w-full"
              >
                <Image
                  className="object-cover w-full h-full"
                  quality={100}
                  width={1920}
                  height={1080}
                  src="https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/a5c31a44-8e28-41af-ade6-5da8f75cc65b/3.JPG?format=2500w"
                  alt="Contact Image"
                />
              </motion.div>
            </motion.div>
          </section>
          <section>
            <ContactForm />
          </section>
        </section>
      </AnimatePresence>
    </>
  );
}
