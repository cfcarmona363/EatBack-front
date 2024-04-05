"use client";

import { useState } from "react";
import FormInputText from "../../components/FormInputText";
import ImageSelector from "../../components/ImageSelector";
import Button from "@/components/Button";

const CompanyProfile = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    profileImage: undefined,
  });

  const onChangeInputs = (value, field) => {
    setFormValues((prev) => {
      const newValue = { ...prev };
      newValue[field] = value;
      return newValue;
    });
  };
  //test

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border rounded-2xl shadow-lg">
      <div className="text-center">
        <ImageSelector
          selectedImage={formValues.profileImage}
          setSelectedImage={onChangeInputs}
          fieldName="profileImage"
        />
        <FormInputText
          title="Company name"
          value={formValues.companyName}
          onChange={onChangeInputs}
          fieldName="companyName"
        />
        <FormInputText
          title="Email"
          value={formValues.email}
          onChange={onChangeInputs}
          fieldName="email"
        />
        <FormInputText
          title="Phone number"
          value={formValues.phoneNumber}
          onChange={onChangeInputs}
          fieldName="phoneNumber"
        />
        <div className="flex w-full justify-end p-5">
          <Button label="Save" />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
