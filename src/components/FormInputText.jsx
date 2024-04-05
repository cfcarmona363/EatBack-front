const FormInputText = ({
  title,
  value,
  onChange,
  fieldName,
  placeHolder,
  type,
  required,
}) => {
  const inputChange = ({ target }) => {
    onChange(target.value, fieldName);
  };

  return (
    <div className="flex flex-col justify-between items-center h-full my-4">
      <span className="text-gray-700 text-sm font-bold mb-1 text-start w-full">
        {title}
      </span>
      <input
        className="rounded border  border-gray-300 w-full p-2"
        value={value}
        onChange={inputChange}
        placeholder={placeHolder}
        type={type}
        required={required}
      ></input>
    </div>
  );
};

export default FormInputText;
