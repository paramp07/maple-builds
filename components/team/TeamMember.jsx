import { urlFor } from "@/src/app/lib/urlFor"
import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function TeamMember(props) {
    const {name, jobTitle, image, description} = props

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
            <div class="card_content p-4 h-full bg-none flex flex-col justify-between">
              <div class='flex-b'>
              <h2 class="card_title text-black text-lg font-semibold tracking-wider uppercase m-0">{name}</h2>
              <p class="card_text text-black text-sm leading-6 mb-5 font-normal">{jobTitle}</p>
              </div>
              <AccordionDemo description={description} />
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
    )
}

function AccordionDemo(props) {
  const {description} = props
  return (
    <Accordion.Root
    className=" text-gray-900 p-[.1rem] text-sm rounded font-light block w-full cursor-pointer border border-solid border-zinc-500 border-opacity-90 bg-transparent"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Read More</AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  </Accordion.Root>
  )
  
};

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      '',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 shadow-mauve6 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

