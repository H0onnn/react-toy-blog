export interface Comment {
  id: string;
  postId: string;
  content: string;
  createdAt: string;
}

export interface ReqComment extends Comment {}
