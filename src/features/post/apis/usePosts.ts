import { useState, useEffect } from "react";
import { Post } from "../types";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = localStorage.getItem("posts");
    if (posts) {
      setPosts(JSON.parse(posts));
    }
  }, []);

  return { posts };
};
