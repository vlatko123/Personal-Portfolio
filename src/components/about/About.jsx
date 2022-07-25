import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import {motion} from 'framer-motion';

export const About = () => {
  return (
    <motion.div animate={{ y: 10 }}
    transition={{ ease: "easeOut", duration: 1 }}>
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Links to="experience">Experience</Styled.Links>
        <Styled.Links to="training">Training</Styled.Links>
      </Styled.Wrapper>
      <Outlet />
    </Styled.Container>
    </motion.div>
  );
};

const Styled = {
  Container: styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
  `,
  Links: styled(Link)`
    text-decoration: none;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    overflow: hidden;
    z-index: 1;
    padding: 15px;
    min-width: 150px;
    text-align: center;
    color: ${(props) => props.theme.color};
    &:hover {
      color: rgb(255, 24, 235);
    }
    @media only screen and (max-width: 375px) {
      min-width: 100px;
      padding: 8px;
      margin: 0 5px 0 5px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
    @media only screen and (max-width: 320px) {
      min-width: 80px;
      padding: 5px;
    }
  `,
};
