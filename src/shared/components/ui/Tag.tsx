import styled from "styled-components";

import { THEMES } from "@/shared/styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: string;
}

export const Tag = ({ children, bgColor }: Props) => {
  return <Container bgColor={bgColor}>{children}</Container>;
};

const Container = styled.div<Props>`
  text-align: center;

  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 1rem;

  background-color: ${(props) => props.bgColor || THEMES.gray};
  color: ${THEMES.darkgray};
  font-size: 1.4rem;
  font-weight: bold;
`;
