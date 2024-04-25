import { useGetComments } from "../../apis";
import { Flex } from "@/shared/components/ui";
import { CommentItem } from "./CommentItem";

export const CommentList = () => {
  const comments = useGetComments();

  return (
    <Flex direction="column" gap={30}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </Flex>
  );
};
