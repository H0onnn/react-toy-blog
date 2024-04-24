import styled from "styled-components";
import { Flex, FlexProps } from "./Flex";
import { THEMES } from "@/shared/styles";

interface Props extends FlexProps {
  children: React.ReactNode;
  $shadow?: boolean;
}

export const Card = ({
  children,
  $shadow,
  direction = "column",
  style,
  ...props
}: Props) => {
  return (
    <StyledCard
      {...props}
      direction={direction}
      $shadow={$shadow}
      style={style}
    >
      {children}
    </StyledCard>
  );
};

const StyledCard = styled(Flex)<Props>`
  position: relative;
  background-color: ${THEMES.white};
  border-radius: 1.2rem;
  padding: 1.6rem;
  box-shadow: ${(props) =>
    props.$shadow ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none"};

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;
