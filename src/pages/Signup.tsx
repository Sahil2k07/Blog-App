import axios from "axios";
import Auth from "../components/Auth/Auth";
import Quote from "../components/Quote";
import { userEndpoints } from "../services/baseUrls";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import type { AuthContextType } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Signup() {
  const { userData } = useContext(AuthContext) as AuthContextType;

  const navigate = useNavigate();

  const handleOtp = async () => {
    if (
      userData.email === undefined ||
      userData.email.length === 0 ||
      userData.name === undefined ||
      userData.name.length === 0 ||
      userData.password === undefined ||
      userData.password.length === 0
    ) {
      toast.error("All fields are required");
      return;
    }

    const toastId = toast.loading("Sending OTP");

    try {
      const response = await axios.post(userEndpoints.SEND_OTP_API, {
        email: userData.email,
      });

      if (response?.data?.success) {
        toast.dismiss(toastId);

        navigate("/verify-email");

        toast.success("OTP sent Successfully");

        return;
      }

      if (!response.data.success) {
        toast.dismiss(toastId);

        navigate("/signup");

        toast.error(`${response?.data?.msg}`);

        return;
      }
    } catch (error) {
      toast.dismiss(toastId);
      navigate("/signup");
      toast.error("Problem while sending OTP");
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signup" submitFunction={handleOtp} />
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default Signup;
