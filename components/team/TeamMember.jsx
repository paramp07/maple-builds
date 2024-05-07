import { urlFor } from "@/src/app/lib/urlFor";
import React from "react";
import classNames from "classnames";
// import * as Accordion from '@radix-ui/react-accordion';
// import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TeamMember(props) {
  const { name, jobTitle, image, description } = props;

  return (
    <li class="cards_item w-full flex p-[1rem] sm:w-[50%] md:w-[33.3333%] ">
      <div class="card bg-white rounded flex flex-col overflow-hidden w-full">
        {/* <div class="card_image"><img src={urlFor(image).url()} className=" aspect-[13/16] object-cover align-middle" /></div> */}
        <div className="w-full ">
          <img
            src={urlFor(image).url()}
            className="object-cover aspect-[12/16] w-[100%]"
          />
        </div>
        <div class="card_content py-2 h-full bg-none flex flex-col justify-between">
          <AccordionDemo
            description={description}
            name={name}
            jobTitle={jobTitle}
          />
        </div>
      </div>
    </li>
    // <li class="flex w-full p-4 mx-6 md:w-[50%] md:mx-0 lg:w-[33.3333%]">
    //         <div class="bg-white flex flex-col overflow-hidden relative cursor-pointer">
    //           <div className="aspect-square w-full">
    //                    <img
    //                      src={urlFor(image).url()}
    //                      className="object-cover h-full hover:scale-150"
    //                    />
    //           </div>
    //           <div className="absolute inset-0  bg-black  bg-opacity-50 opacity-0 hover:opacity-100  transition-all duration-[200ms]">
    //               <div className="flex items-center justify-center h-full p-4">
    //                   <p className="text-gray-100 text-[250%] text-center font-bold md:text-3xl lg:text-3xl">{name}</p>
    //               </div>
    //           </div>
    //         </div>
    // </li>
  );
}

function AccordionDemo(props) {
  const { description, name, jobTitle } = props;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div class="flex-b text-left">
            <h2 class="card_title text-black text-lg font-semibold tracking-wider uppercase m-0">
              {name}
            </h2>
            <p class="card_text text-black text-sm leading-6 font-normal">
              {jobTitle}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
