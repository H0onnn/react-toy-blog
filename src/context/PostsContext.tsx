import { useState, createContext, useContext } from "react";
import { Post } from "@/features/post/types";
import { getStorageItem } from "@/shared/utils";

const initialPosts: Post[] = getStorageItem("posts") || [];

interface PostsContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostsContext = createContext<PostsContextProps | {}>({});

export const usePostContext = (): PostsContextProps => {
  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("컨텍스트 내부에서 사용해주세요.");
  }

  return context as PostsContextProps;
};

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
