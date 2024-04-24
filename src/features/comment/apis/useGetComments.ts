import { useState, useEffect, useCallback } from "react";
import { usePosts } from "@/features/post/apis";

import { Comment } from "../types";

export const useGetComments = (postId: string) => {
  const { posts } = usePosts();
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = useCallback(async () => {
    try {
      if (posts) {
        const post = posts.find((post) => post.id === postId);

        if (post) {
          setComments(post.comments ?? []);
        }
      }
    } catch (error) {
      console.error("Comment fetching error: ", error);
    }
  }, [postId, posts]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return {
    comments,
  };
};
