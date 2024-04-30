import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWritePost } from "@/features/post/apis";
import { Flex, Input, Textarea } from "@/shared/components/ui";
import { ButtonSection } from "./ButtonSection";

export const PostForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { writePost } = useWritePost();

  const handleSubmit = async () => {
    const newPost = await writePost({
      id: crypto.randomUUID(),
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
    });

    if (newPost) {
      navigate("/");
    } else {
      window.alert("글 작성중 오류가 발생했습니다.");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Flex direction="column" gap={20} style={{ margin: "2rem 0" }}>
        <Input
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(value) => setTitle(value)}
          required
          leftSlot={
            <img
              src="/icons/pencil.svg"
              alt="pencil"
              style={{ width: 24, height: 24 }}
            />
          }
        />

        <Textarea
          placeholder="내용을 입력해주세요."
          value={content}
          onChange={(value) => setContent(value)}
          required
          maxLength={2000}
          style={{ minHeight: 300 }}
        />

        <ButtonSection />
      </Flex>
    </form>
  );
};
