import { usePosts } from "./usePosts";
import { useParams } from "react-router-dom";
import { setStorageItem } from "@/shared/utils";

export const useDeletePost = () => {
  const { posts } = usePosts();
  const { id } = useParams<{ id: string }>();

  const deletePost = async (): Promise<boolean> => {
    try {
      const newPosts = posts
        ? posts.filter((post: { id: string }) => post.id !== id)
        : [];

      setStorageItem("posts", newPosts);

      return true;
    } catch (error) {
      console.error("Post delete error: ", error);
      return false;
    }
  };

  return { deletePost };
};
