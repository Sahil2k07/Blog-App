import axios from "axios";
import { useEffect, useState } from "react";
import { blogEndpoints } from "../services/baseUrls";

interface Blog {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  author: {
    _id: string;
    email: string;
    name: string;
  };
}

export const useFullBlog = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const fullBlog = async () => {
      try {
        const response = await axios.get(`${blogEndpoints.FULL_BLOG_API}${id}`,{
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        setBlog(response.data.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fullBlog();
  }, [id]);

  return {
    loading,
    blog,
  };
};
