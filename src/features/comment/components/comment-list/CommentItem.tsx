import styled from "styled-components";

import { useDeleteComment } from "@/features/comment/apis";

import { Comment } from "../../types";
import { THEMES, full_img_cover } from "@/shared/styles";
import { Flex, Tag, IconButton } from "@/shared/components/ui";

interface Props extends Comment {}

export const CommentItem = ({ id, content, createdAt }: Props) => {
  const { deleteComment } = useDeleteComment({ commentId: id });

  const handleDeleteComment = async () => {
    if (!window.confirm("댓글을 삭제하시겠습니까?")) return;

    const isDeleted = await deleteComment();

    if (isDeleted) {
      window.alert("댓글이 삭제되었습니다.");
    } else {
      window.alert("댓글 삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <Flex justify="space-between">
      <Flex align="center">
        <Profile>
          <img src="https://source.unsplash.com/random/256x256" alt="profile" />
        </Profile>

        <Contents>
          <p>{content}</p>
        </Contents>
      </Flex>

      <Flex align="center" gap={20}>
        <Tag>{`🕒 ${createdAt.split("T")[0]}`}</Tag>
        <IconButton src="/icons/delete.svg" onClick={handleDeleteComment} />
      </Flex>
    </Flex>
  );
};

const Profile = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    ${full_img_cover}
  }
`;

const Contents = styled.div`
  flex: 1;
  margin-left: 1rem;

  p {
    font-size: 1.6rem;
    color: ${THEMES.darkgray};
  }
`;
