import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Styled.Footer className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
      <Styled.List>
        <Styled.ListItem>
          <Styled.SocialLink
            href="https://www.linkedin.com/in/vlatko-bogojevski/"
            target="_blank"
          >
            <FaLinkedin />
          </Styled.SocialLink>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SocialLink
            href="https://github.com/vlatko123"
            target="_blank"
          >
            <FaGithubSquare />
          </Styled.SocialLink>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.SocialLink
            href="https://www.facebook.com/profile.php?id=100004691987062"
            target="_blank"
          >
            <FaFacebookSquare />
          </Styled.SocialLink>
        </Styled.ListItem>
      </Styled.List>
    </Styled.Footer>
  );
};

const Styled = {
  Footer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background: ${(props) => props.theme.background};
    border-radius: 10% 120% 90% 10% / 90% 10%;
  `,
  List: styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
  `,
  ListItem: styled.li`
    list-style: none;
    margin: 0 30px;
  `,
  SocialLink: styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.color};
    font-size: 30px;
    &:hover {
      color: rgb(255, 24, 235);
    }
  `,
};
