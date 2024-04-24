import styled from "styled-components";

import { MENU_ITEMS } from "@/shared/constants";
import { THEMES } from "@/shared/styles";

import { Header } from "./Header";
import { MenuItem } from "../ui";

export const SideNavBar = () => {
  return (
    <Container>
      <Header />

      <MenuList>
        {MENU_ITEMS.map((item) => (
          <li key={item.title}>
            <MenuItem
              title={item.title}
              icon={item.icon}
              href={item.href}
              fill={item.icon_fill}
            />
          </li>
        ))}
      </MenuList>

      <EmptySpace />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.2rem;
  min-width: 24rem;
  height: 100%;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const EmptySpace = styled.div`
  flex-grow: 1;
  margin-top: 0.8rem;
  background-color: ${THEMES.gray};
  border-radius: 0.4rem;
`;
