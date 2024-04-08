"use client";

import { useContext, useState } from "react";
import Button from "../../components/Button";
import FormInputText from "../../components/FormInputText";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    userName: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(false);
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

      router.push("/");
    } else {
      changeShowRequired();
    }
  };

  const changeShowRequired = () => {
    setShowrequired((prev) => !prev);
  };

  const clickSignUp = () => {
    setIsSignUp((prev) => !prev);
    setUserInfo({
      userName: "",
      password: "",
      companyName: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6">
        <div className="text-3xl font-semibold text-center mb-6">
          {isSignUp ? "Sign up" : "Login"}
        </div>
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
          {isSignUp && (
            <div className="mb-4">
              <FormInputText
                title={"Company name"}
                value={userInfo.companyName}
                onChange={onChangeInputs}
                fieldName={"companyName"}
                placeHolder={"Enter your Company name"}
                required={true}
              />
            </div>
          )}
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
            <Button label={isSignUp ? "Sign up" : "Login"} onClick={onSubmit} />
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
              onClick={clickSignUp}
            >
              {isSignUp ? "Login" : "Sign up"}
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
