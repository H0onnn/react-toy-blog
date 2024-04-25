import { useEffect, useState, useCallback } from "react";
import { usePostContext } from "@/context";
import { useParams } from "react-router-dom";

import { Post } from "../types";

export const usePostDetail = () => {
  const [postDetail, setPostDetail] = useState<Post | null>(null);
  const { posts } = usePostContext();

  const { id } = useParams<{ id: string }>();

  const fetchPostDetail = useCallback(async () => {
    try {
      if (posts) {
        const post = posts.find((post) => post.id === id);

        if (post) {
          setPostDetail(post);
        }
      }
    } catch (error) {
      console.error("Post fetching error: ", error);
    }
  }, [id, posts]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

  return { postDetail };
};
