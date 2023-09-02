import React, { useState, useEffect } from "react";
import Select from 'react-select';
import PlanOption from "./PlanOption";
import SectionHeading from "./SectionHeading";
import Datepicker from "react-tailwindcss-datepicker";

const options = [
  { value: 'Custom Build', label: 'Custom Build' },
  { value: 'Full Remodel', label: 'Full Remodel' },
  { value: 'Kitchen Remodel', label: 'Kitchen Remodel' },
  { value: 'Bathroom Remodel', label: 'Bathroom Remodel' },
  { value: 'Addition', label: 'Addition' },
  { value: 'Home Exterior', label: 'Home Exterior' },
  { value: 'Home Interior', label: 'Home Interior' },
  { value: 'Basement', label: 'Basement' },
  { value: 'Garage', label: 'Garage' },
  { value: 'Patio', label: 'Patio' },
  { value: 'Porch', label: 'Porch' },
  { value: 'Deck', label: 'Deck' },
  { value: 'Landscaping', label: 'Landscaping' },
  { value: 'Restoration', label: 'Restoration' },
  { value: 'Small Jobs', label: 'Small Jobs' },
  { value: 'Other', label: 'Other' },
];

const Plan = ({
  currentStep,
  onPlanSelect,
  onToggleDuration,
  planOptions,
  isPlanEmpty,
  planDuration,
}) => {
  const [errorDisplay, setErrorDisplay] = useState("invisible");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (isPlanEmpty) {
      setErrorDisplay("block");
    } else {
      setErrorDisplay("invisible");
    }

    if (planDuration == "mo") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [isPlanEmpty, planDuration]);

  // MULTI CHOICE DROPDOWN
  
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div>
      <SectionHeading
        title="Choose your project type"
        desc="Choose all that apply"
      />
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-1">
        {planOptions.map((planOption) => (
          <PlanOption
            onPlanSelect={onPlanSelect}
            key={planOption.id}
            id={planOption.id}
            logo={planOption.logo.src}
            title={planOption.title}
            price={planOption.price}
            selected={planOption.selected}
            planDuration={planDuration}
          />
        ))}
      </div>
      <div
        className={`${errorDisplay} font-medium text-[#ed3548] mt-5 text-center`}
      >
        Please select a plan!
      </div>
      <div className="font-medium mt-8 bg-[#fafbff] text-[#02295a] p-2 rounded-xl">
        <div className="flex justify-center items-center space-x-5 text-[14px]">
          <div>Monthly</div>
          <div className="scale-75">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={onToggleDuration}
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={check}
              />
              <div className="border-2 border-black w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
            </label>
          </div>
          <div>Yearly</div>
        </div>
      </div>
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          isMulti={true}
          className="focus:ring-0"
        />
      </div>
      <div>
            <label for="budget" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget *</label>
            <input type="number" id="budget" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div>
        <label>How soon are you looking to start?*</label>
        <Datepicker />
        <label>Do you have a completion date that needs to be reached?*</label>
        <Datepicker />
      </div>
      <div>
        <div class="flex items-center mb-4">
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
        </div>
        <div class="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
        </div>
      </div>

    </div>
  );
};









export default Plan;
