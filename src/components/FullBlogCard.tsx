import axios from "axios";
import toast from "react-hot-toast";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { blogEndpoints } from "../services/baseUrls";

interface FullBlogCardProps {
  blog: {
    title: string;
    content: string;
    published: boolean;
    author: {
      _id: string;
      name: string;
      email: string;
    };
    _id: string;
    createdAt: Date;
  };
  user: boolean;
}

function FullBlogCard({ blog, user }: FullBlogCardProps) {
  function formatDate(dateStr: Date) {
    const date = new Date(dateStr);
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()}`;
  }

  const navigate = useNavigate();

  const { id } = useParams();

  const deleteBlog = async () => {
    const toastId = toast.loading("Deleting Blog...");

    try {
      const response = await axios.delete(
        `${blogEndpoints.DELETE_BLOG_API}${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (response) {
        toast.dismiss(toastId);

        navigate("/my-blogs");

        toast.success("Blog Deleted Successfully");
      }
    } catch (e) {
      toast.dismiss(toastId);

      navigate("/my-blogs");

      toast.error("Error Deleting Blog");
    }
  };

  return (
    <div className="flex justify-center mx-8 bg-white rounded-md">
      <div className="w-full max-w-screen-xl px-10 pt-12 pb-12">
        <div className="mx-3 mb-5">
          <div className="mb-4 text-5xl font-extrabold">{blog.title}</div>

          <div className="pt-2 font-medium text-[#4a00e0]">
            Post on {formatDate(blog.createdAt)}
          </div>

          <div className="pt-4 text-xl text-slate-800">{blog.content}</div>

          <div className="pt-4">
            Blog ID:{" "}
            <span className="font-medium text-green-500">{blog._id}</span>
          </div>
        </div>

        <div className="mx-3">
          <div className="text-lg font-medium text-[#4a00e0]">Author</div>

          <div className="flex flex-col w-full">
            <div className="mb-4 text-xl font-bold">
              {blog.author.name || "Anonymous"}
            </div>

            <div className="pt-2">
              Author's Email:
              <span className="ml-2 font-medium text-[#4a00e0]">
                {blog.author.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex w-auto items-center gap-2 ml-3 text-[#4a00e0] mt-5 p-3 rounded-md bg-[#daccf8] flex-shrink-0 hover:scale-90 ease-in-out"
          >
            <IoArrowBackOutline />
            <p>Back</p>
          </button>

          <div className={`${user ? "block" : "hidden"} flex items-center`}>
            <button onClick={() => navigate(`/updateBlog/${id}`)} className="p-3 mt-5 ml-3 text-white ease-in-out bg-yellow-300 rounded-md hover:scale-90">
              Update Blog
            </button>

            <button
              onClick={deleteBlog}
              className="p-3 mt-5 ml-3 text-white ease-in-out bg-red-400 rounded-3xl hover:scale-90"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlogCard;
