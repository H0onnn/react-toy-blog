import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "@/context";

import { Comment } from "../types";

export const useGetComments = (): Comment[] => {
  const { posts } = usePostContext();
  const { id } = useParams<{ id: string }>();

  const getComments = useCallback(
    (id: string): Comment[] => {
      if (!id || !posts) return [];

      const post = posts.find((post) => post.id === id);

      return post?.comments || [];
    },
    [posts]
  );

  useEffect(() => {
    if (id) {
      getComments(id);
    }
  }, [getComments, id]);

  if (id) {
    return getComments(id);
  } else {
    return [];
  }
};
