import { useState, useEffect, useCallback } from "react";

import { Comment } from "../types";
import { Post } from "@/features/post/types";

export const useGetComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = useCallback(async () => {
    try {
      const posts = localStorage.getItem("posts");

      if (posts) {
        const parsedPosts: Post[] = JSON.parse(posts);
        const post = parsedPosts.find((post) => post.id === postId);

        if (post) {
          setComments(post.comments ?? []);
        }
      }
    } catch (error) {
      console.error("Comment fetching error: ", error);
    }
  }, [postId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return {
    comments,
  };
};
