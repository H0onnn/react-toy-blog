import { usePosts } from "./usePosts";
import { useParams } from "react-router-dom";
import { ReqUpdatePost } from "../types";
import { setStorageItem } from "@/shared/utils";

export const useEditPost = () => {
  const { posts } = usePosts();
  const { id } = useParams<{ id: string }>();

  const editPost = async (newPost: ReqUpdatePost): Promise<boolean> => {
    try {
      const newPosts = posts.map((post: { id: string }) => {
        if (post.id === id) {
          return { ...post, ...newPost };
        }
        return post;
      });

      setStorageItem("posts", newPosts);

      return true;
    } catch (error) {
      console.error("Post edit error: ", error);
      return false;
    }
  };

  return { editPost };
};
