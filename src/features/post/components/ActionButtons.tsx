import { Flex, IconButton } from "@/shared/components/ui";

import { useNavigate } from "react-router-dom";
import { useDeletePost, useEditPost } from "../apis";

interface Props {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  updatedTitle: string;
  updatedContent: string;
}

export const ActionButtons = ({
  isEdit,
  setIsEdit,
  updatedTitle,
  updatedContent,
}: Props) => {
  const navigate = useNavigate();
  const { editPost } = useEditPost();
  const { deletePost } = useDeletePost();

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleCancelClick = () => {
    setIsEdit(false);
  };

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

  const handleEditSubmit = async () => {
    const result = await editPost({
      title: updatedTitle,
      content: updatedContent,
    });

    if (result) {
      setIsEdit(false);
      navigate("/");
      alert("게시글이 수정되었습니다.");
    } else {
      alert("게시글 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <Flex gap={10}>
      <IconButton
        src="/icons/pencil-black.svg"
        onClick={() => {
          isEdit === false ? handleEditClick() : handleEditSubmit();
        }}
      />

      <IconButton
        src={isEdit === false ? "/icons/delete-black.svg" : "/icons/cancel.svg"}
        onClick={() => {
          isEdit === false ? handleDeleteSubmit() : handleCancelClick();
        }}
      />
    </Flex>
  );
};
