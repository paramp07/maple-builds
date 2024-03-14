import React from "react";

function PopoverDemo(props) {
  const { home } = props;

  return (
    <div class="popover__wrapper">
      <div className="flex items-center portfolio nav-button" id="portfolio-btn">
        <a className="cursor-pointer">PORTFOLIO</a>
        <div className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div class="fade popover__content top-[4.2rem] left-0 z-[10000] bg-gray-100 border-t-4 border-gray-900 flex flex-col font-proxima font-semibold">
        <a
          href="/portfolio/custom-homes"
          class="popover__message flex items-center transition-all duration-300 hover:mx-4 px-[4px] py-[12px] text-left text-[1rem] w-full mx-3 items-center cursor-pointer text-gray-800"
        >
          CUSTOM HOMES
        </a>
        <hr className="bg-gray-900 h-[2px] opacity-20"></hr>
        <a
          href="/portfolio/remodels"
          class="popover__message flex items-center transition-all duration-300 hover:mx-4 px-[4px] py-[12px] text-left text-[1rem] w-full mx-3 items-center cursor-pointer text-gray-800"
        >
          REMODELS
        </a>
      </div>
      <style>
        {`

      #portfolio-btn {
        display: flex;
        flex-direction: row;
      }
      
      popover__wrapper a {
        text-decoration: none;
      }
      
      .popover__wrapper {
        position: relative;
        display: inline-block;
      }
      .popover__content {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        margin-top: 0;
        transform: translate(0, 0px);
        width: 220px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      .popover__content:before {
        position: absolute;
        z-index: -1;
        right: calc(50% - 10px);
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #bfbfbf transparent;
      }
      .popover__wrapper:hover .popover__content {
        z-index: 10;
        opacity: 1;
        visibility: visible;
        transform: translate(0, -5px);
      }
      .popover__message {
        text-align: center;
      }

      

      .fade {
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      
      `}
      </style>
    </div>
  );
}

PopoverDemo.defaultProps = {
  home: false,
};

export default PopoverDemo;
