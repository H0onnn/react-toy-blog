import { useState, useEffect } from "react";
import { Post } from "../types";
import { getStorageItem } from "@/shared/utils";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getStorageItem<Post[]>("posts");

    if (posts) {
      setPosts(posts);
    }
  }, []);

  return { posts };
};
