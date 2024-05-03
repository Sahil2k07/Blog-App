import { useContext } from "react";
import Auth from "../components/Auth/Auth";
import Quote from "../components/Quote";
import { AuthContext } from "../context/AuthContext";
import type { AuthContextType } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { userEndpoints } from "../services/baseUrls";
import { useNavigate } from "react-router-dom";

function Login() {
  const { userData } = useContext(AuthContext) as AuthContextType;

  const navigate = useNavigate();

  const handleLogin = async () => {
    const toastId = toast.loading("Logging In....");

    if (
      userData.email === undefined ||
      userData.email.length === 0 ||
      userData.password === undefined ||
      userData.password.length === 0
    ) {
      toast.error("All Fields are required");
      return;
    }

    try {
      const response = await axios.post(userEndpoints.LOGIN_API, {
        email: userData.email,
        password: userData.password,
      });
      console.log(response)
      if (response?.data?.success) {
        toast.dismiss(toastId);

        localStorage.setItem("token", response?.data?.token);

        navigate("/blogs");

        toast.success("Logged In");

        return;
      } else {
        toast.dismiss(toastId);

        navigate("/");

        toast.error(`${response?.data?.msg}`);
      }
    } catch (error) {
      toast.dismiss(toastId);

      toast.error("Failed to Log In");
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="login" submitFunction={handleLogin} />
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
}

export default Login;
