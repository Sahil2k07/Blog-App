import OTPInput from "react-otp-input";
import Quote from "../components/Quote";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { AuthContextType } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp, IoRepeatSharp } from "react-icons/io5";
import axios from "axios";
import { userEndpoints } from "../services/baseUrls";
import toast from "react-hot-toast";

function VerifyEmail() {
  const { userData, setUserData } = useContext(AuthContext) as AuthContextType;
  console.log(userData);

  const navigate = useNavigate();

  const resendOtp = async () => {
    const toastId = toast.loading("Resending OTP");

    try {
      const response = await axios.post(userEndpoints.SEND_OTP_API, {
        email: userData.email,
      });

      if (response.data.success) {
        toast.dismiss(toastId);

        toast.success("OTP sent Again");

        return;
      }
    } catch (error) {
      toast.dismiss(toastId);

      navigate("/signup");

      toast.error("Problem in sending OTP");
    }
  };

  const handleSignup = async () => {
    if (userData.otp === undefined || userData.otp.length !== 6) {
      toast.error("Please provide the full OTP");
      return;
    }
    console.log(userData);
    const toastId = toast.loading("Signing In...");

    try {
      const response = await axios.post(userEndpoints.SIGNUP_API, {
        name: userData.name,
        email: userData.email,
        otp: userData.otp,
        password: userData.password,
      });
      console.log(response);
      if (response.data.success) {
        toast.dismiss(toastId);

        navigate("/");

        toast.success("User Registered");
        return;
      } else {
        toast.dismiss(toastId);

        navigate("/signup");

        toast.error(`${response?.data?.msg}`);
      }
    } catch (error) {
      toast.dismiss(toastId);

      navigate("/signup");

      toast.error("Oops, Something went wrong...");
    } finally {
      setUserData({
        ...userData,
        otp: undefined,
      });
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center h-screen mx-auto gap-y-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#4a00e0]">
            Please Verify your Email
          </h2>

          <h3 className="mt-1 text-slate-500">
            An OTP has been sent to your Email
          </h3>
        </div>

        <OTPInput
          value={userData.otp}
          onChange={(e) => setUserData({ ...userData, otp: e })}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[48px] lg:w-[60px] mt-4 text-xl font-bold border-0 bg-gradient-to-r from-[#ece5fb] to-[#daccf8] rounded-[0.5rem] text-[#4a00e0] aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 6px",
          }}
        />

        <button
          onClick={handleSignup}
          className="mt-8 w-full text-white bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Sign Up
        </button>

        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/signup")}
            className="flex justify-between items-center bg-[#daccf8] text-[#4a00e0] p-2 rounded-md gap-x-2 text-sm font-medium"
          >
            <IoArrowBackSharp />
            Go Back
          </button>

          <button
            onClick={resendOtp}
            className="flex justify-between items-center bg-[#daccf8] text-[#4a00e0] p-2 rounded-md gap-x-2 text-sm font-medium"
          >
            <IoRepeatSharp />
            Resend OTP
          </button>
        </div>
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default VerifyEmail;
