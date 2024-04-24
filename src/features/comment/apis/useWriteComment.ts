import { Comment, ReqComment } from "../types";
import { Post } from "@/features/post/types";

export const useWriteComment = () => {
  const writeComment = async (
    newComment: ReqComment
  ): Promise<Comment | null> => {
    try {
      const createdComment: Comment = {
        id: newComment.id,
        postId: newComment.postId,
        content: newComment.content,
        createdAt: newComment.createdAt,
      };

      const posts = localStorage.getItem("posts");

      if (posts) {
        const parsedPosts: Post[] = JSON.parse(posts);

        const updatedPosts = parsedPosts.map((post) => {
          if (post.id === newComment.postId) {
            const updatedPost: Post = {
              ...post,
              comments: [...(post.comments || []), createdComment],
            };
            return updatedPost;
          }
          return post;
        });

        localStorage.setItem("posts", JSON.stringify(updatedPosts));
      }

      return createdComment;
    } catch (error) {
      console.error("Comment write error: ", error);
      return null;
    }
  };

  return { writeComment };
};
