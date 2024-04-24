import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWriteComment } from "../../apis";
import { Flex, Input, Button, Icon } from "@/shared/components/ui";

export const CommentForm = () => {
  const { writeComment } = useWriteComment();

  const { id } = useParams<{ id: string }>();

  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const newComment = await writeComment({
      id: crypto.randomUUID(),
      postId: id as string,
      content: comment,
      createdAt: new Date().toISOString(),
    });

    if (newComment) {
      setComment("");
      window.location.reload();
    } else {
      window.alert("댓글 작성중 오류가 발생했습니다.");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{ width: "100%", marginTop: "2rem" }}
    >
      <Flex gap={20}>
        <Input
          placeholder="댓글을 입력해주세요."
          required
          value={comment}
          onVChange={(value) => {
            setComment(value);
          }}
          leftSlot={<Icon src="/icons/pencil.svg" />}
        />

        <Button type="submit" rightSlot={<Icon src="/icons/plus.svg" />}>
          댓글 작성
        </Button>
      </Flex>
    </form>
  );
};
