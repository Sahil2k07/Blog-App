import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { blogEndpoints } from "../services/baseUrls";
import { MdOutlineCancel } from "react-icons/md";

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const createBlog = async () => {
    if (title.length === 0 || content.length === 0) {
      toast.error("Both fields are required");
      return;
    }

    const toastId = toast.loading("Publishing Blog...");

    try {
      const response = await axios.post(
        blogEndpoints.CREATE_BLOG_API,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response) {
        toast.dismiss(toastId);

        navigate("/my-blogs");

        toast.success("Blog Published");
      }
    } catch (e) {
      toast.dismiss(toastId);

      navigate("/my-blogs");

      toast.error("Couldn't Publish Blog");
    }
  };

  return (
    <div className="flex justify-center w-full pt-8 bg-[#ece5fb] h-screen">
      <div className="w-full max-w-screen-lg">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="w-full bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg focus:outline-[#4a00e0] block p-2.5"
          placeholder="Title"
        />

        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="Description"
          className="w-full h-80 mt-4 bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg focus:outline-[#4a00e0] block p-2.5"
        />

        <div className="flex justify-between">
          <button
            onClick={createBlog}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:scale-95 rounded-lg"
          >
            Publish Blog
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-red-400 gap-2 mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white hover:scale-95 rounded-lg"
          >
            <MdOutlineCancel />
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Publish;
