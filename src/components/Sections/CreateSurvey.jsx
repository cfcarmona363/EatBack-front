import { useEffect, useState } from "react";
import FormInputText from "../FormInputText";
import FormInputWithChips from "../FormInputWithChips";
import Button from "../Button";

const CreateSurveySection = () => {
  const [formValues, setFormValues] = useState({
    surveyName: "",
    surveyQuestions: [],
  });

  const onChangeInputs = (value, field) => {
    setFormValues((prev) => {
      const newValue = { ...prev };
      newValue[field] = value;
      return newValue;
    });
  };

  return (
    <div className="m-10 w-5/12 mx-auto ">
      <h1 className="text-2xl my-5">Create Survey</h1>
      <div className="block rounded-xl py-4 bg-white w-auto min-h-full ">
        <FormInputText
          value={formValues.surveyName}
          title="Survey name"
          onChange={onChangeInputs}
          fieldName="surveyName"
        />
        <FormInputWithChips
          values={formValues.surveyQuestions}
          title="Questions"
          onChange={onChangeInputs}
          fieldName="surveyQuestions"
        />
        <div className="flex w-full justify-end p-5">
          <Button label="Save" />
        </div>
      </div>
    </div>
  );
};

export default CreateSurveySection;
