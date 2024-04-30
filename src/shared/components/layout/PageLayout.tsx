import styled from "styled-components";

import { Outlet } from "react-router-dom";

import { Header } from "./Header";

export const PageLayout = () => {
  return (
    <Layout>
      <div>
        <Header />
        <Outlet />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1728px;
  height: -moz-fit-content;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1056px) {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 1024px;
  }

  @media screen and (max-width: 1919px) {
    width: 1376px;
  }

  & > div {
    margin: 0 auto;
  }
`;
