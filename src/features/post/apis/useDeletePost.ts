import { useParams } from "react-router-dom";

export const useDeletePost = () => {
  const { id } = useParams<{ id: string }>();

  const deletePost = async (): Promise<boolean> => {
    try {
      const posts = localStorage.getItem("posts");

      const newPosts = posts
        ? JSON.parse(posts).filter((post: { id: string }) => post.id !== id)
        : [];

      localStorage.setItem("posts", JSON.stringify(newPosts));

      return true;
    } catch (error) {
      console.error("Post delete error: ", error);
      return false;
    }
  };

  return { deletePost };
};
