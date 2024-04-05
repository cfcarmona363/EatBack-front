import { useState } from "react";
import generateRandomId from "../utils/idGenerator";

const FormInputWithChips = ({ title, values, onChange, fieldName }) => {
  const [newQuestion, setNewQuestion] = useState("");

  const inputChange = ({ target }) => {
    setNewQuestion(target.value);
  };

  const onEnter = ({ key }) => {
    if (key === "Enter" && !!newQuestion) {
      onChange(
        [...values, { id: generateRandomId(newQuestion), value: newQuestion }],
        fieldName
      );
      setNewQuestion("");
    }
  };

  const clearQuestion = (question) => {
    const newQuestions = values.filter((item) => item.id !== question);
    onChange(newQuestions, fieldName);
  };

  return (
    <div className="flex flex-col justify-between items-center h-full my-4">
      <span className="text-gray-700 text-sm font-bold mb-1 text-start w-full">
        {title}
      </span>
      <div className="w-full">
        <input
          className="rounded border border-gray-300 w-full p-2"
          value={newQuestion}
          onChange={inputChange}
          onKeyDown={onEnter}
        ></input>
        <div className="flex flex-wrap gap-2 py-4">
          {values?.map((item) => (
            <div
              key={item.id}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-7 rounded-full cursor-pointer w-fit max-w-full"
              onClick={() => clearQuestion(item.id)}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormInputWithChips;
