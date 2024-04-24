import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDeletePost, usePostDetail } from "@/features/post/apis";
import { Flex, Tag, IconButton, Divider } from "@/shared/components/ui";
import { ActionButtons } from "@/features/post/components";
import { CommentForm, CommentList } from "@/features/comment/components";
import { THEMES } from "@/shared/styles";

const PostDetail = () => {
  const navigate = useNavigate();

  const { postDetail } = usePostDetail();
  const { deletePost } = useDeletePost();

  const handleDeleteSubmit = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?") === false) return;

    const result = await deletePost();

    if (result) {
      navigate("/");
      alert("게시글이 삭제되었습니다.");
    } else {
      alert("게시글 삭제 중 오류가 발생했습니다.");
    }
  };

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
          <IconButton
            src="/icons/chevron-left.svg"
            size={50}
            onClick={() => navigate("/")}
          />

          <Title>{postDetail.title}</Title>

          <Tag>{`🕒 ${postDetail.createdAt.split("T")[0]}`}</Tag>
        </Flex>

        <Flex
          justify="flex-end"
          style={{ width: "100%", marginBottom: "2rem" }}
        >
          <ActionButtons
            editIcon="/icons/pencil-black.svg"
            deleteIcon="/icons/delete.svg"
            onEditClick={() => navigate(`/post/${postDetail.id}/edit`)}
            onDeleteClick={handleDeleteSubmit}
          />
        </Flex>

        {postDetail.imgSrc && (
          <ImageBox>
            <img src={postDetail.imgSrc} alt={postDetail.title} />
          </ImageBox>
        )}

        <Content>{postDetail.content}</Content>

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
