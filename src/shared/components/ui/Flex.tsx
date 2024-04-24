import styled from "styled-components";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  self?: React.CSSProperties["alignSelf"];
  gap?: React.CSSProperties["gap"];
}

export const Flex = ({
  children,
  direction,
  justify,
  align,
  gap,
  ...props
}: FlexProps) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      {...props}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? "row"};
  justify-content: ${(props) => props.justify ?? "flex-start"};
  align-items: ${(props) => props.align ?? "stretch"};
  gap: ${(props) => `${props.gap}px` ?? "0"};
`;
