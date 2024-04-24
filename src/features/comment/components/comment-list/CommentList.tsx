import { useGetComments } from "../../apis";
import { Flex } from "@/shared/components/ui";
import { CommentItem } from "./CommentItem";

interface Props {
  postId: string;
}

export const CommentList = ({ postId }: Props) => {
  const { comments } = useGetComments(postId);

  return (
    <Flex direction="column" gap={30}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </Flex>
  );
};
