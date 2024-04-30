import styled from "styled-components";
import { THEMES } from "@/shared/styles";
import { Icon } from "../ui";

export const Header = () => {
  return (
    <Container>
      <div className="hedaer_inner_wrapper">
        <Logo>
          <Icon src="/icons/computer.svg" size={44} />
          <h1>ITGO</h1>
        </Logo>

        <div>나중에</div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 1.2rem 1.6rem;
  background-color: ${THEMES.white};
  position: sticky;

  .hedaer_inner_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  & > h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }
`;
