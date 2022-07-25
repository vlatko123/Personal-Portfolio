import React from "react";
import styled from "styled-components";
import { RoutesComponent } from "../routes/RoutesComponent";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <Styled.Home className="row">
      <Navbar />
      <RoutesComponent />
      <Footer />
    </Styled.Home>
  );
};

const Styled = {
  Home: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
};
