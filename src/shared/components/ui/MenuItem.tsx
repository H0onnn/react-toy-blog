import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { THEMES } from "@/shared/styles";

interface Props {
  title: string;
  icon: string;
  fill: string;
  href: string;
  size?: number;
}

export const MenuItem = ({ title, href, icon, fill, size }: Props) => {
  const location = useLocation();

  const isActive = location.pathname === href;

  return (
    <Container to={href} $active={isActive}>
      <Icon src={isActive ? fill : icon} size={size} />
      <p>{title}</p>
    </Container>
  );
};

const Container = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  background-color: ${({ $active }) =>
    $active ? THEMES.secondary : THEMES.gray};
  color: ${({ $active }) => ($active ? THEMES.primary : THEMES.black)};
  font-size: 1.4rem;
  font-weight: 500;

  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${THEMES.secondary};
    color: ${THEMES.primary};
  }
`;
