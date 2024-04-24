import { Comment } from "@/features/comment/types";

export interface Post {
  id: string;
  title: string;
  content: string;
  imgSrc?: string;
  createdAt: string;
  updatedAt?: string;
  comments?: Comment[];
}

export interface ReqPost {
  id: string;
  title: string;
  content: string;
  imgSrc?: string;
  createdAt: string;
}

export interface ReqUpdatePost {
  title: string;
  content: string;
}
