import { useParams } from "react-router-dom";
import { ReqUpdatePost } from "../types";

export const useEditPost = () => {
  const { id } = useParams<{ id: string }>();

  const editPost = async (newPost: ReqUpdatePost): Promise<boolean> => {
    try {
      const posts = localStorage.getItem("posts");

      const newPosts = posts
        ? JSON.parse(posts).map((post: { id: string }) => {
            if (post.id === id) {
              return { ...post, ...newPost };
            }
            return post;
          })
        : [];

      localStorage.setItem("posts", JSON.stringify(newPosts));

      return true;
    } catch (error) {
      console.error("Post edit error: ", error);
      return false;
    }
  };

  return { editPost };
};
