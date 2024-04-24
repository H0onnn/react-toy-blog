import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import { Post } from "../types";

export const usePostDetail = () => {
  const [postDetail, setPostDetail] = useState<Post | null>(null);

  const { id } = useParams<{ id: string }>();

  const fetchPostDetail = useCallback(async () => {
    try {
      const posts = localStorage.getItem("posts");

      if (posts) {
        const parsedPosts: Post[] = JSON.parse(posts);
        const post = parsedPosts.find((post) => post.id === id);

        if (post) {
          setPostDetail(post);
        }
      }
    } catch (error) {
      console.error("Post fetching error: ", error);
    }
  }, [id]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

  return { postDetail, fetchPostDetail };
};
