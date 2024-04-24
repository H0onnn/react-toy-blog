import styled from "styled-components";

import { Link } from "react-router-dom";
import { Flex, Icon, Button } from "../ui";
import { THEMES } from "@/shared/styles";

export const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={20}
      style={{ height: "100vh", width: "100%" }}
    >
      <Icon src="icons/not-found.svg" size={100} />

      <Text>잘못된 페이지 경로입니다.</Text>

      <Link to="/">
        <Button>홈으로 이동</Button>
      </Link>
    </Flex>
  );
};

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${THEMES.black};
`;
