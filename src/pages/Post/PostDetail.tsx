import styled from "styled-components";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePostDetail } from "@/features/post/apis";

import {
  Flex,
  Tag,
  IconButton,
  Input,
  Textarea,
  Divider,
} from "@/shared/components/ui";
import { ActionButtons } from "@/features/post/components";
import { CommentForm, CommentList } from "@/features/comment/components";
import { THEMES } from "@/shared/styles";

const PostDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { postDetail } = usePostDetail();

  useEffect(() => {
    if (postDetail) {
      setTitle(postDetail.title);
      setContent(postDetail.content);
    }
  }, [postDetail]);

  if (!postDetail) return null;

  return (
    <>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ margin: "2rem 0" }}
      >
        <Flex
          align="center"
          justify="space-between"
          style={{ width: "100%", marginBottom: "2rem" }}
        >
          {isEdit === false && (
            <IconButton
              src="/icons/chevron-left.svg"
              size={50}
              onClick={() => navigate(-1)}
            />
          )}

          {isEdit === false ? (
            <Title>{postDetail.title}</Title>
          ) : (
            <Input
              value={title}
              onVChange={(value) => setTitle(value)}
              required
              leftSlot={
                <img
                  src="/icons/pencil.svg"
                  alt="pencil"
                  style={{ width: 24, height: 24 }}
                />
              }
            />
          )}

          {isEdit === false && (
            <Tag>{`🕒 ${postDetail.createdAt.split("T")[0]}`}</Tag>
          )}
        </Flex>

        <Flex
          justify="flex-end"
          style={{ width: "100%", marginBottom: "2rem" }}
        >
          <ActionButtons
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            updatedTitle={title}
            updatedContent={content}
          />
        </Flex>

        {postDetail.imgSrc && (
          <ImageBox>
            <img src={postDetail.imgSrc} alt={postDetail.title} />
          </ImageBox>
        )}

        {isEdit === false ? (
          <Content>{postDetail.content}</Content>
        ) : (
          <Textarea
            value={content}
            onVChange={(value) => setContent(value)}
            required
            maxLength={2000}
            style={{ minHeight: 300 }}
          />
        )}

        <Divider />
      </Flex>

      {postDetail.comments && <CommentList postId={postDetail.id} />}

      <CommentForm />
    </>
  );
};

export default PostDetail;

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: bold;
`;

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

const Content = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
  color: ${THEMES.darkgray};
`;
