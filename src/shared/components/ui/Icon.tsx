import styled from "styled-components";
import { full_img_cover } from "@/shared/styles";

interface Props {
  src: string;
  size?: number;
}

export const Icon = ({ src, size = 24 }: Props) => {
  return (
    <Container $size={size}>
      <img src={src} alt="icon" />
    </Container>
  );
};

const Container = styled.div<{ $size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  img {
    ${full_img_cover}
  }
`;
