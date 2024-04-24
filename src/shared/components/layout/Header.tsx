import styled from "styled-components";
import { THEMES } from "@/shared/styles";
import { Icon } from "../ui";

export const Header = () => {
  return (
    <Container>
      <div>
        <Icon src="/icons/blog.svg" size={44} />
        <h1>H0onnn</h1>
      </div>
    </Container>
  );
};

const Container = styled.header`
  background-color: ${THEMES.primary};
  color: ${THEMES.white};
  width: 100%;
  height: 16rem;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  margin-bottom: 0.8rem;
  padding: 1.6rem;
  border-radius: 0.4rem;
  font-size: 4.4rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;
