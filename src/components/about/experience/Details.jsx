import React from "react";
import styled from "styled-components";
import { GoStar } from "react-icons/go";

export const Details = () => {
  return (
    <Styled.Content>
      <Styled.List>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Currently employed as Front-end developer and support in Rigilog.
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Working on a digital adoption platform called WalkMe. My role on this
          project is to create guidance for the future users of our application.
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Creation of guidance or walkthroughs has to be in the way that will
          help users to better understand functionality of the application.
          Because of that every walkthrough is created and adjusted from
          scratch.
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          There are two main aspects: design and functionality of the guidance.
          Elements that should be designed in walkMe are popups and baloons. For
          that matter we are using CSS. About functionality, walkMe allows us to
          use jQuery to make better and more flexible guidance.
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Also I have experience in Simpo platform which is another digital
          adoption platform. Main principals are basicly the same with walkMe
          platform.
        </Styled.Item>
      </Styled.List>
    </Styled.Content>
  );
};

const Styled = {
  Content: styled.div`
    height: 75%;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    z-index: 1;
    padding: 10px;
    font-family: sans-serif;

  `,
  List: styled.ul`
    height: 180px;
    overflow-y: scroll;
    list-style: none;

  `,
  Item: styled.li`
    display: block;
  `,
  Span: styled.span`
    color: rgb(255, 197, 0);
  `,
};
