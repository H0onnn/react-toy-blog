import { useNavigate } from "react-router-dom";
import { Button, Flex, Icon } from "@/shared/components/ui";

export const ButtonSection = () => {
  const navigate = useNavigate();

  return (
    <Flex gap={10} justify="flex-end">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        style={{
          width: 120,
        }}
      >
        취소
      </Button>

      <Button
        type="submit"
        leftSlot={<Icon src="/icons/pencil.svg" />}
        style={{
          width: 120,
        }}
      >
        작성하기
      </Button>
    </Flex>
  );
};
