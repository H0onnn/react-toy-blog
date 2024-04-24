import { Flex, IconButton } from "@/shared/components/ui";

interface Props {
  isEdit: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

export const ActionButtons = ({
  isEdit,
  onEditClick,
  onDeleteClick,
}: Props) => {
  return (
    <Flex gap={10}>
      <IconButton src="/icons/pencil-black.svg" onClick={onEditClick} />

      <IconButton
        src={isEdit === false ? "/icons/delete-black.svg" : "/icons/cancel.svg"}
        onClick={onDeleteClick}
      />
    </Flex>
  );
};
