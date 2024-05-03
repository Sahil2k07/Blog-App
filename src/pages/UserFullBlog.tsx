import { useParams } from "react-router-dom";
import FullBlogCard from "../components/FullBlogCard";
import { useFullBlog } from "../hooks/fullBlog";
import Spinner from "../components/Spinner";

function UserFullBlog() {
  const { id = `` } = useParams();

  const { loading, blog } = useFullBlog(id);

  if (loading || blog === undefined) {
    return (
      <div className="flex items-center justify-center h-screen -mt-11">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#ece5fb] min-h-screen pb-4">
      <div className="w-11/12 max-w-4xl bg-[#ece5fb] pt-3 pb-3 mx-auto">
        <FullBlogCard blog={blog} user={true} />
      </div>
    </div>
  );
}

export default UserFullBlog;
