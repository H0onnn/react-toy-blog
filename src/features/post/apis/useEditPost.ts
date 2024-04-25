import { usePostContext } from "@/context";
import { useParams } from "react-router-dom";
import { ReqUpdatePost } from "../types";
import { setStorageItem } from "@/shared/utils";

export const useEditPost = () => {
  const { posts, setPosts } = usePostContext();
  const { id } = useParams<{ id: string }>();

  const editPost = async (newPost: ReqUpdatePost): Promise<boolean> => {
    try {
      const updatedPosts = posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            title: newPost.title,
            content: newPost.content,
            updatedAt: new Date().toISOString(),
          };
        }
        return post;
      });

      setPosts(updatedPosts);
      setStorageItem("posts", updatedPosts);

      return true;
    } catch (error) {
      console.error("Post edit error: ", error);
      return false;
    }
  };

  return { editPost };
};
