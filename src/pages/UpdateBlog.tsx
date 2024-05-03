import axios from "axios";
import { useEffect, useState } from "react";
import { blogEndpoints } from "../services/baseUrls";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { MdOutlineCancel } from "react-icons/md";

function UpdateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fullBlog = async () => {
      try {
        const response = await axios.get(
          `${blogEndpoints.FULL_BLOG_API}${id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        setTitle(response.data.data.title);
        setContent(response.data.data.content);
      } catch (e) {}
    };

    fullBlog();
  }, [id]);

  const updatePost = async () => {
    if (title.length === 0 || content.length === 0) {
      toast.error("Fields should not be empty");
      return;
    }

    const toastId = toast.loading("Updating Blog...");

    try {
      const response = await axios.put(
        blogEndpoints.UPDATE_BLOG_API,
        {
          postId: id,
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

        navigate(`/myBlogs/${id}`);

        toast.success("Blog Updated Successfully");
      }
    } catch (e) {
      toast.dismiss(toastId);

      navigate(`/myBlogs/${id}`);

      toast.error("Couldn't update Blog");
    }
  };

  return (
    <div className="flex justify-center w-full pt-8 h-screen bg-[#ece5fb]">
      <div className="flex flex-col w-full max-w-screen-lg">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="w-full bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg focus:outline-[#4a00e0] block p-2.5"
          placeholder="Update the Blog's Title"
          value={title}
        />

        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="Update the Blog's Description"
          className="w-full h-80 mt-4 bg-gray-50 border border-slate-500 text-gray-900 text-sm rounded-lg focus:outline-[#4a00e0] block p-2.5"
          value={content}
        />

        <div className="flex justify-between">
          <button
            onClick={updatePost}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] hover:scale-95 rounded-lg"
          >
            Update post
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

export default UpdateBlog;
