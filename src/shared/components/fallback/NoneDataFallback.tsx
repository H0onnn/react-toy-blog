import styled from "styled-components";

import { Flex, Icon } from "../ui";
import { THEMES } from "@/shared/styles";

export const NoneDataFallback = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={20}
      style={{ height: "100%", width: "100%" }}
    >
      <Icon src="icons/mail.svg" size={100} />

      <Text>작성된 게시글이 없어요.</Text>
    </Flex>
  );
};

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${THEMES.black};
`;
