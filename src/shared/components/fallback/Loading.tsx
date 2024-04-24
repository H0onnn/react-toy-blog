import { Flex, Icon } from "../ui";

export const Loading = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={20}
      style={{ height: "100%", width: "100%" }}
    >
      <Icon src="icons/loading.svg" size={100} />
    </Flex>
  );
};
