import { Post } from "@/features/post/types";

interface Props {
  postId: string;
  commentId: string;
}

export const useDeleteComment = ({ postId, commentId }: Props) => {
  const posts = localStorage.getItem("posts");

  const deleteComment = async (): Promise<boolean> => {
    try {
      if (posts) {
        const parsedPosts: Post[] = JSON.parse(posts);

        const updatedPosts = parsedPosts.map((post) => {
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

        localStorage.setItem("posts", JSON.stringify(updatedPosts));
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
