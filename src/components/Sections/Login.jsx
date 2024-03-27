import { useContext, useState } from "react";
import Button from "../Button";
import FormInputText from "../FormInputText";
import { UserContext } from "../../context/Context";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });

  const [showRequired, setShowrequired] = useState(false);

  const { setUser } = useContext(UserContext);

  const onChangeInputs = (value, field) => {
    showRequired && changeShowRequired();
    setUserInfo((prev) => {
      const newValue = { ...prev };
      newValue[field] = value;
      return newValue;
    });
  };

  const onSubmit = () => {
    if (userInfo.password && userInfo.userName) {
      setUser({ userName: userInfo.userName });
    } else {
      changeShowRequired();
    }
  };

  const changeShowRequired = () => {
    setShowrequired((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6">
        <div className="text-3xl font-semibold text-center mb-6">Login</div>
        <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <FormInputText
              title={"Username"}
              value={userInfo.userName}
              onChange={onChangeInputs}
              fieldName={"userName"}
              placeHolder={"Enter your username"}
              required={true}
            />
          </div>
          <div className="mb-6">
            <FormInputText
              title={"Password"}
              value={userInfo.password}
              onChange={onChangeInputs}
              fieldName={"password"}
              placeHolder={"Enter your password"}
              type="password"
              required={true}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button label="Login" onClick={onSubmit} />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          {showRequired && (
            <span className="text-sm my-6 text-red-400">
              Please complete all the fields
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
