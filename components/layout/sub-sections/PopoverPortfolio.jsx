import React from 'react';


function PopoverDemo(props) {
  const {home} = props
  
  return (
    <div class="popover__wrapper">
    <div className='flex items-center portfolio'>
      <a className='cursor-default nav-button'>PORTFOLIO</a>
      <div className='py-9 ml-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 arrow"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
      </svg>
      </div>
      
    </div>
    <div class="popover__content z-[10000] bg-white pl-[1rem] pr-[1rem] py-[1rem] flex flex-col space-y-2">
      <a href="/portfolio/custom-homes" class="popover__message nav-button text-left text-[1.2rem] w-fit mx-2 cursor-pointer">Custom Homes</a>
      <a href="/portfolio/remodels" class="popover__message nav-button text-left text-[1.2rem] w-fit mx-2 cursor-pointer">Remodels</a>
    </div>
    <style>
      {`

      .portfolio:hover .arrow {
        rotate: 180deg;
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
        transform: translate(0, 10px);
        width: 220px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      .popover__content:before {
        position: absolute;
        z-index: -1;
        right: calc(50% - 10px);
        top: -8px;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #bfbfbf transparent;
      }
      .popover__wrapper:hover .popover__content {
        z-index: 10;
        opacity: 1;
        visibility: visible;
        transform: translate(0, -20px);
      }
      .popover__message {
        text-align: center;
        color: ${home ? '#1f1f1f' : '#1f1f1f'}
      }

      .popover__message:hover {
        opacity: 70%;
      }
      
      `}
    </style>
  </div>
  )
  
  
};

PopoverDemo.defaultProps = {
  home: false,
}

export default PopoverDemo;
