import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  id: string;
  user: boolean;
}

function BlogCard({ id, authorName, title, content, user}: BlogCardProps) {
  return (
    <div className="flex flex-col justify-center p-4 pb-4 mx-3 bg-white border-b rounded-md cursor-pointer gap-y-2 border-slate-200">
      <div className="flex">
        <div className="flex flex-col justify-center text-sm font-medium text-[#4a00e0]">
          {authorName}
        </div>

        <div className="flex flex-col justify-center pl-2">
          <div className="w-1 h-1 rounded-full bg-[#4a00e0]"></div>
        </div>
      </div>

      <div className="pt-2 text-xl font-bold">{title}</div>

      <div className="font-light text-slate-700 text-md">
        {content.slice(0, 100) + "..."}
      </div>

      <Link to={user ? `/myBlogs/${id}` : `/blogs/${id}`}>
        <button className="flex items-center gap-1 text-sm font-medium text-[#4a00e0] bg-[#ece5fb] mt-3 w-fit p-1 rounded-md hover:scale-95 px-2">
          Explore
          <IoArrowForwardOutline />
        </button>
      </Link>
    </div>
  );
}

export default BlogCard;
