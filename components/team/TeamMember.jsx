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
    <li class="cards_item w-full flex p-[1rem] sm:w-[50%] md:w-[33.3333%] max-w-[380px] mx-auto">
      <div class="card bg-white rounded flex flex-col overflow-hidden w-full">
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
        <AccordionContent className="px-3 py-2 rounded-xl bg-neutral-100 text-zinc-800">
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
