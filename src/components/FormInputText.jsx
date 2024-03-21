const FormInputText = ({ title, value, onChange, fieldName }) => {
  const inputChange = ({ target }) => {
    onChange(target.value, fieldName);
  };

  return (
    <div className="flex justify-between p-4">
      <span className="w-1/4 ">{title}</span>
      <input
        className="rounded border border-gray-300 w-3/4 p-2"
        value={value}
        onChange={inputChange}
      ></input>
    </div>
  );
};

export default FormInputText;
