import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Context";
import { FaDownload } from "react-icons/fa";
import resume from "../../src/Vlatko.pdf";
import img from '../vlatko.jpeg';

export const Intro = () => {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <Styled.Container>
      <Styled.Avatar src={img} alt="vlatko" />
      <Styled.Message>
        <Styled.Title>Hello, my name is Vlatko</Styled.Title>
        <Styled.Paragraph>
        To learn more about me check the About and Portfolio section OR{" "}
          <Styled.Download href={resume} target="_blank" rel="noreferrer">
            <FaDownload />
          </Styled.Download>{" "}
          my resume.
        </Styled.Paragraph>
      </Styled.Message>
      <Styled.ThemeColor onClick={changeTheme}>CHANGE THEME</Styled.ThemeColor>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    overflow: hidden;
    z-index: 1;

    @media only screen and (max-width: 425px) {
      width: 90%;
      height: 70vh;
      justify-content: space-evenly;
    }
  `,
  Avatar: styled.img`
    width: 190px;
    height: 190px;
    object-fit: container;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.background};
    margin-top: 10px;

    @media only screen and (max-width: 768px) {
      width: 140px;
      height: 140px;
    }
    @media only screen and (max-width: 425px) {
      width: 120px;
      height: 120px;
    }
    @media only screen and (max-width: 375px) {
      width: 100px;
      height: 100px;
    }
  `,
  Message: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: ${(props) => props.theme.color};
    @media only screen and (max-width: 375px) {
      justify-content: space-evenly;
    }
  `,
  Title: styled.h2`
    text-align: center;
    margin: 0;
  `,
  Paragraph: styled.p`
    text-align: center;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }
  `,
  ThemeColor: styled.button`
    border: 2px solid ${(props) => props.theme.background};
    background: transparent;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    color: ${(props) => props.theme.color};
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      border-color: ${(props) => props.theme.color};
      color: ${(props) => props.theme.background};
    }
  `,
  Download: styled.a`
    font-size: 20px;
    text-decoration: none;
    color: rgb(255, 197, 0);
    &:hover {
      color: rgb(255, 197, 0);
    }
  `,
};
