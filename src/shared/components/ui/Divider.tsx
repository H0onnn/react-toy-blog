import styled from "styled-components";

import { THEMES } from "@/shared/styles";

interface Props {
  vertical?: boolean;
}

export const Divider = ({ vertical = false }: Props) => {
  return <StyledDivider />;
};

const StyledDivider = styled.div<Props>`
  width: ${(props) => (props.vertical ? "1px" : "100%")};
  height: ${(props) => (props.vertical ? "100%" : "1px")};
  background-color: ${THEMES.mediumgray};
  margin: 2rem 0;
`;
