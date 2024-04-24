import styled from "styled-components";

import { Outlet } from "react-router-dom";

import { SideNavBar } from "./SideNavBar";

export const PageLayout = () => {
  return (
    <Layout>
      <SideNavBar />
      <main>
        <Outlet />
      </main>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;

  & > main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    padding: 2.4rem;
    margin-left: 26rem;
    overflow-y: auto;
  }
`;
