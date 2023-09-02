import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "e.g John Doe",
    },
    {
      id: 2,
      name: "account-name",
      label: "Account Name (if same as above, leave blank)",
      placeholder: "e.g John Doe",
    },
    {
      id: 3,
      name: "email",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
    },
    {
      id: 4,
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
    },
    {
      id: 5,
      name: "address",
      label: "Home Address",
      placeholder: "e.g 194 Shiloh Rd, Garland TX",
    },
    {
      id: 6,
      name: "project-address",
      label: "Project Address",
      placeholder: "",
    },
  ]);

  // useEffect(() => {
  //   console.log(isEmpty);
  // }, [isEmpty]);

  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, home address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
