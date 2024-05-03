import BlogCard from "../components/BlogCard";
import Shimmer from "../components/Shimmer";
import { useBlogs } from "../hooks/allBlogs";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="bg-[#ece5fb] h-screen w-full">
        <div className="grid w-11/12 grid-cols-1 gap-2 mx-auto max-w-7xl gap-y-3 lg:grid-cols-2">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#ece5fb] min-h-screen pt-2 pb-2">
      <div className="grid w-11/12 grid-cols-1 gap-2 pt-3 mx-auto lg:grid-cols-2 gap-y-3 max-w-7xl">
        {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name}
              content={blog.content}
              id={blog._id}
              title={blog.title}
              key={blog._id}
              user={false}
            />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
