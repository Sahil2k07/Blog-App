import axios from "axios";
import { useEffect, useState } from "react";
import { blogEndpoints } from "../services/baseUrls";

interface Blog {
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
  _id: string;
}

export const useUserBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(blogEndpoints.USER_BLOG_API, {
          headers: {
            Authorization: localStorage.getItem("token") || null,
          },
        });

        setBlogs(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchBlogs(); // Call the async function
  }, []);

  return {
    loading,
    blogs,
  };
};
