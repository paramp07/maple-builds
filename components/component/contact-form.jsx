/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OpfvbTRroGn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";

export function ContactForm() {
  return (
    <div className="w-full max-w-2xl px-4 py-12 mx-auto font-manrope sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-semibold text-neutral-700">
        Fill out the form below or call us
      </h2>
      <form className="mt-8 space-y-8">
        {[
          { id: "fullName", label: "Full Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
          { id: "phoneNumber", label: "Phone Number", type: "tel" },
          { id: "projectAddress", label: "Project Address", type: "text" },
          { id: "projectDetails", label: "Project Details", type: "textarea" },
          { id: "filesPhotos", label: "Files & Photos", type: "file" },
          {
            id: "hearAboutUs",
            label: "How did you hear about us?",
            type: "text",
          },
          { id: "referredBy", label: "Referred by", type: "text" },
        ].map(({ id, label, type }) => (
          <div key={id} className="relative text-[1.2rem]">
            {type === "textarea" ? (
              <div className="relative">
                <label
                  htmlFor={id}
                  className="absolute top-0 left-0 text-base text-gray-600 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-opacity-70"
                >
                  {label}
                </label>
                <textarea
                  id={id}
                  placeholder=" "
                  className="w-full h-32 p-2 mt-10 transition-colors duration-300 border resize-none border-muted-foreground focus:outline-none focus:border-primary peer"
                />
              </div>
            ) : type === "file" ? (
              <div className="mt-[-15px] space-y-2 text-gray-600">
                <Label htmlFor={id}>{label}</Label>
                <div className="flex items-center gap-2 text-gray-600">
                  <Input id={id} type="file" className="flex-1 text-gray-600" />
                </div>
              </div>
            ) : (
              <div className="relative">
                <input
                  type={type}
                  id={id}
                  placeholder=" "
                  className="w-full py-[10px] transition-colors duration-300 border-b border-muted-foreground focus:outline-none focus:border-primary peer"
                />
                <label
                  htmlFor={id}
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs peer-focus:text-opacity-70"
                >
                  {label}
                </label>
              </div>
            )}
          </div>
        ))}
        <div className="flex">
          <Button
            type="submit"
            className="px-8 rounded-none bg-neutral-900 text-primary-foreground hover:bg-neutral-800/80"
          >
            Request a Consult
          </Button>
        </div>
      </form>
    </div>
  );
}


