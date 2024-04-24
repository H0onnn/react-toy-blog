import { usePosts } from "@/features/post/apis";
import { setStorageItem } from "@/shared/utils";
import { Comment, ReqComment } from "../types";
import { Post } from "@/features/post/types";

export const useWriteComment = () => {
  const { posts } = usePosts();

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
      if (posts) {
        const updatedPosts = posts.map((post) => {
          if (post.id === newComment.postId) {
            const updatedPost: Post = {
              ...post,
              comments: [...(post.comments || []), createdComment],
            };
            return updatedPost;
          }
          return post;
        });

        setStorageItem("posts", updatedPosts);
      }

      return createdComment;
    } catch (error) {
      console.error("Comment write error: ", error);
      return null;
    }
  };

  return { writeComment };
};
