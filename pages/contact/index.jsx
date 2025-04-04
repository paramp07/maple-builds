import { ContactForm } from "@/components/component/contact-form";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="pt-[10rem] font-mulish">
        <section>
          <div className="w-[90%] mx-auto">
            <h2 className="uppercase text-neutral-600">Lets get in touch</h2>
            <h1 className="text-6xl mt-3 font-semibold text-neutral-800  tracking-[-4px]">
              Contact Us
            </h1>
          </div>
        </section>
        <section className="w-[90%] mt-36 mx-auto text-lg flex-col flex gap-6">
          <p className="font-light text-gray-600">
            We’d love to hear from you.
          </p>
          <div className="flex flex-col gap-6 font-light text-neutral-700">
            <div>
              <div className="flex items-center gap-3">
                <p className="">Number</p>
                <Phone className="fill-neutral-400" stroke="false" size={17} />
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
        </section>
        <section className="w-[90%] mx-auto max-w-4xl">
          <Image
            className="object-cover w-full mt-10 aspect-[6/8]"
            alt="image"
            quality={100}
            width={1920}
            height={1080}
            src={
              "https://images.squarespace-cdn.com/content/v1/64025cbc903531470f0036d6/a5c31a44-8e28-41af-ade6-5da8f75cc65b/3.JPG?format=2500w"
            }
          />
          
        </section>
        <section>
            <ContactForm />
        </section>
      </section>
    </>
  );
}
