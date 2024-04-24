import styled from "styled-components";

import { Icon } from "./Icon";
import { THEMES } from "@/shared/styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  size?: number;
  onClick?: () => void;
}

export const IconButton = ({ src, size, onClick, ...props }: Props) => {
  return (
    <Button onClick={() => onClick?.()} {...props}>
      <Icon src={src} size={size} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  background-color: transparent;
  border-radius: 1rem;
  padding: 0.5rem;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${THEMES.buttongray};
  }
`;
