import { usePosts } from "@/features/post/apis";
import { Post } from "@/features/post/types";
import { setStorageItem } from "@/shared/utils";

interface Props {
  postId: string;
  commentId: string;
}

export const useDeleteComment = ({ postId, commentId }: Props) => {
  const { posts } = usePosts();

  const deleteComment = async (): Promise<boolean> => {
    try {
      if (posts) {
        const updatedPosts = posts.map((post) => {
          if (post.id === postId) {
            const updatedPost: Post = {
              ...post,
              comments: post.comments?.filter(
                (comment) => comment.id !== commentId
              ),
            };
            return updatedPost;
          }
          return post;
        });

        setStorageItem("posts", updatedPosts);
      }

      return true;
    } catch (error) {
      console.error("Comment delete error: ", error);
      return false;
    }
  };

  return {
    deleteComment,
  };
};
