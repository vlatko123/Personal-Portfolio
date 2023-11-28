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
          Currently employed as Front-end developer and support in Rigilog DOOEL. In the past few months, I have been working on an Angular project, which was my first experience with this framework. My responsibilities are to improve the UI/UX of the application, implement the elements and features, and make API calls. 
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Worked with digital adoption platforms such as WalkMe, Simpo, and Stonly. My responsibilities in those projects were to create and implement guidance for our end users. For that purpose, I use HTML, CSS, and jQuery. 
          There are two main aspects: the design and functionality of the guidance.
          Elements that should be designed are popups and steps (small text fields). For
          that matter, we are using HTML/CSS. About functionality, digital adoption platforms allow us to
          use jQuery to make better and more flexible guidance.
        </Styled.Item>
        <Styled.Item>
          <Styled.Span>
            <GoStar />
          </Styled.Span>
          Worked with React application. I have created a few projects using the latest version of React. Those projects can be found in the portfolio section of this project. 
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
