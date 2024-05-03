import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");

    toast.error("Logged Out");
  };
  return (
    <nav
      className={`${
        pathname === "/" ||
        pathname === "/signup" ||
        pathname === "/verify-email" ||
        pathname === "*"
          ? "hidden"
          : ""
      } w-full bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] border-b`}
    >
      <div className="flex items-center justify-between w-full px-10 py-4 mx-auto md:w-11/12 ">
        <Link
          to={"/blogs"}
          className="flex flex-col justify-center text-3xl bg-white cursor-pointer text-[#4a00e0] rounded-md p-1"
        >
          Blog App
        </Link>
        <div className="flex items-center justify-center">
          <Link to="/my-blogs">
            <button
              type="button"
              className="mr-4 text-white bg-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 text-center"
            >
              My Blogs
            </button>
          </Link>

          <Link to={`/publish`}>
            <button
              type="button"
              className="mr-4 text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 text-center"
            >
              New
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="px-5 py-2.5 mr-4 text-sm font-medium text-center text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none focus:ring-4"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
