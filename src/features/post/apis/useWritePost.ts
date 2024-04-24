import { ReqPost, Post } from "../types";

export const useWritePost = () => {
  const writePost = async (newPost: ReqPost): Promise<Post | null> => {
    try {
      const createdPost: Post = {
        id: newPost.id,
        title: newPost.title,
        content: newPost.content,
        imgSrc:
          newPost.imgSrc || "https://source.unsplash.com/random/1080x1080",
        createdAt: newPost.createdAt,
        comments: [],
      };

      const posts = localStorage.getItem("posts");

      if (posts) {
        const parsedPosts = JSON.parse(posts);
        localStorage.setItem(
          "posts",
          JSON.stringify([...parsedPosts, createdPost])
        );
      } else {
        localStorage.setItem("posts", JSON.stringify([createdPost]));
      }

      return createdPost;
    } catch (error) {
      console.error("Post write error: ", error);
      return null;
    }
  };

  return { writePost };
};
