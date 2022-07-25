import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Styled.Nav className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
      <Styled.LogoWrapper to="/">
        <Styled.Logo>VB</Styled.Logo>
      </Styled.LogoWrapper>
      <div>
        <Styled.List>
          <Styled.ListItem to="/about">About</Styled.ListItem>
          <Styled.ListItem to="/portfolio">Portfolio</Styled.ListItem>
        </Styled.List>
      </div>
    </Styled.Nav>
  );
};

const Styled = {
  Nav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background: ${(props) => props.theme.background};
    border-radius: 10% 120% 90% 10% / 90% 10%;
  `,
  LogoWrapper: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.color};
    text-decoration: none;
  `,
  Logo: styled.div`
    color: ${(props) => props.theme.color};
    &:hover {
      color: rgb(255, 24, 235);
    }
  `,
  List: styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  `,
  ListItem: styled(Link)`
    list-style: none;
    margin: 0 10px;
    text-decoration: none;
    color: ${(props) => props.theme.color};
    &:hover {
      color: rgb(255, 24, 235);
    }
  `,
};
