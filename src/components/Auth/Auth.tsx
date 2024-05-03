import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import type { AuthContextType } from "../../context/AuthContext";

interface AuthProps {
  type: "signup" | "login";
  submitFunction: () => void;
}

function Auth({ type, submitFunction }: AuthProps) {
  const { userData, setUserData } = useContext(AuthContext) as AuthContextType;

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div>
          <div className="flex flex-col px-10 mx-auto">
            <div className="text-3xl font-extrabold text-[#4a00e0] mx-auto">
              Create an account
            </div>
            <div className="mx-auto mt-1 text-slate-500">
              {type === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 text-[#4a00e0] underline font-light"
                to={type === "login" ? "/signup" : "/"}
              >
                {type === "login" ? "Sign up" : "Login"}
              </Link>
            </div>
          </div>
          <div className="pt-2">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter your Name"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="button"
              className="mt-8 w-full text-white bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={submitFunction}
            >
              {type === "signup" ? "Sign up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
