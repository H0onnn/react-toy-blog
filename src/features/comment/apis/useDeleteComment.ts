import { usePostContext } from "@/context";
import { useParams } from "react-router-dom";
import { setStorageItem } from "@/shared/utils";

interface Props {
  commentId: string;
}

export const useDeleteComment = ({ commentId }: Props) => {
  const { posts, setPosts } = usePostContext();
  const { id } = useParams<{ id: string }>();

  const deleteComment = async (): Promise<boolean> => {
    try {
      const postIndex = posts.findIndex((post) => post.id === id);

      if (postIndex !== -1) {
        const updatedComments = posts[postIndex].comments.filter(
          (comment) => comment.id !== commentId
        );

        const updatedPost = {
          ...posts[postIndex],
          comments: updatedComments,
        };

        const updatedPosts = [...posts];
        updatedPosts[postIndex] = updatedPost;

        setPosts(updatedPosts);
        setStorageItem("posts", updatedPosts);

        return true;
      }
    } catch (error) {
      console.error("Comment delete error: ", error);
    }

    return false;
  };

  return {
    deleteComment,
  };
};
