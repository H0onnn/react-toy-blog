import { Flex, IconButton } from "@/shared/components/ui";

interface Props {
  editIcon: string;
  deleteIcon: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export const ActionButtons = ({
  editIcon,
  deleteIcon,
  onEditClick,
  onDeleteClick,
}: Props) => {
  return (
    <Flex gap={10}>
      <IconButton src={editIcon} onClick={onEditClick} />

      <IconButton src={deleteIcon} onClick={onDeleteClick} />
    </Flex>
  );
};
