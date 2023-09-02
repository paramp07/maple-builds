import { urlFor } from "@/src/app/lib/urlFor"

export default function TeamMember(props) {
    const {name, jobTitle, image} = props

    return (
        <li class="cards_item flex p-[1rem] sm:w-[50%] md:w-[33.3333%] ">
          <div class="card bg-white rounded flex flex-col overflow-hidden">
            <div class="card_image"><img src={urlFor(image).url()} className=" aspect-[13/16] object-cover align-middle" /></div>
            <div class="card_content p-4 h-full bg-none flex flex-col justify-between">
              <div class='flex-b'>
              <h2 class="card_title text-black text-lg font-semibold tracking-wider uppercase m-0">{name}</h2>
              <p class="card_text text-black text-sm leading-6 mb-5 font-normal">{jobTitle}</p>
              </div>
              <button class="btn card_btn text-gray-900 p-[.8rem] text-sm uppercase rounded font-light block w-full cursor-pointer border border-solid border-zinc-500 border-opacity-90 bg-transparent hover:bg-zinc-500 hover:text-zinc-100 transition-all">Read More</button>
            </div>
          </div>
        </li>
    )
}