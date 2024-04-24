import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEditPost, usePostDetail } from "@/features/post/apis";
import {
  Flex,
  IconButton,
  Input,
  Textarea,
  Icon,
} from "@/shared/components/ui";

export const EditForm = () => {
  const navigate = useNavigate();

  const { postDetail } = usePostDetail();
  const { editPost } = useEditPost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleEditSubmit = async () => {
    if (!postDetail) return;

    const result = await editPost({
      id: postDetail.id,
      title,
      content,
    });

    if (result) {
      navigate(`/post/${postDetail.id}`);
      alert("게시글이 수정되었습니다.");
    } else {
      alert("게시글 수정 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    if (postDetail) {
      setTitle(postDetail.title);
      setContent(postDetail.content);
    }
  }, [postDetail]);

  if (!postDetail) return null;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEditSubmit();
      }}
    >
      <Flex align="center" style={{ width: "100%", marginBottom: "2rem" }}>
        <IconButton
          type="button"
          src="/icons/chevron-left.svg"
          size={50}
          style={{ marginRight: "1rem" }}
          onClick={() => navigate(-1)}
        />

        <Input
          value={title}
          onVChange={(value) => setTitle(value)}
          required
          leftSlot={<Icon src="/icons/pencil.svg" />}
        />
      </Flex>

      <Flex justify="flex-end" style={{ width: "100%", marginBottom: "2rem" }}>
        <IconButton type="submit" src="/icons/save.svg" />
      </Flex>

      {postDetail.imgSrc && (
        <ImageBox>
          <img src={postDetail.imgSrc} alt={postDetail.title} />
        </ImageBox>
      )}

      <Textarea
        value={content}
        onVChange={(value) => setContent(value)}
        required
        maxLength={2000}
        style={{ minHeight: 300 }}
      />
    </form>
  );
};

const ImageBox = styled.div`
  width: 100%;
  height: 50rem;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    object-fit: cover;
  }
`;
