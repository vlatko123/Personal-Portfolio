import React from "react";
import styled from "styled-components";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const Training = () => {
  return (
   
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.SingleCard>
          <Styled.Title>Front-End Academy</Styled.Title>
          <Styled.Span>
            <Styled.SvgSpan>
              <FaRegHandPointRight />
            </Styled.SvgSpan>{" "}
            Brainster
          </Styled.Span>
        </Styled.SingleCard>
        <Styled.List>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Started with basics of HTML and CSS
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Learned Bootstrap
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            JavaScript and jQuery
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Basics of React.js
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            During academy finished aproximately 20 small projects and 3 bigger
            projects
          </li>
        </Styled.List>
      </Styled.ContentWrapper>
      <Styled.ContentWrapper>
        <Styled.SingleCard>
          <Styled.Title>React course</Styled.Title>
          <Styled.Span>
            <Styled.SvgSpan>
              <FaRegHandPointRight />
            </Styled.SvgSpan>{" "}
            Brainster
          </Styled.Span>
        </Styled.SingleCard>
        <Styled.List>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            More detailed approach in React
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Class and Functional components
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Event and Form handling
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Composition and Inheritance
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Hooks{" "}
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Context API and Redux (basic){" "}
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            At the end i have created 2 projects based on React.{" "}
          </li>
        </Styled.List>
      </Styled.ContentWrapper>
      <Styled.ContentWrapper>
        <Styled.SingleCard>
          <Styled.Title>JavaScript and React.js</Styled.Title>
          <Styled.Span>
            <Styled.SvgSpan>
              <FaRegHandPointRight />
            </Styled.SvgSpan>{" "}
            Online course
          </Styled.Span>
        </Styled.SingleCard>
        <Styled.List>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Mostly courses provided by Academind and Priple
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            JavaScript data types, variables, constants, functions, logical
            operators, loops, handling the DOM, events, destructuring...
          </li>
          <li>
            <Styled.Icon>
              <FaStar />
            </Styled.Icon>{" "}
            Finished few small projects, like weather app, budget app...
          </li>
        </Styled.List>
      </Styled.ContentWrapper>
    </Styled.Container>
  
  );
};

const Styled = {
  Container: styled.div`
    width: 90%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
 
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      max-height: 500px;
      overflow-y: scroll;
    }
  `,
  ContentWrapper: styled.div`
    width: 350px;
    max-height: 90%;
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    @media only screen and (max-width: 768px) {
      width: 340px;
    }
    @media only screen and (max-width: 425px) {
      width: 300px;
    }
    @media only screen and (max-width: 375px) {
      width: 250px;
    }
    @media only screen and (max-width: 320px) {
      max-width: 240px;
    }

  `,
  SingleCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background: rgba(59, 59, 255, 0.8);
    color: rgb(24, 255, 144);
    padding: 5px;
    backdrop-filter: blur(2px);
  `,
  Title: styled.h4`
  @media only screen and (max-width: 940px) {
   font-size: 20px;
  }
  @media only screen and (max-width: 830px) {
    font-size: 18px;
   }
  `,
  Span: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  `,
  SvgSpan: styled.span`
    margin-right: 5px;
  `,
  List: styled.ul`
    max-height: 220px;
    list-style: none;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 15px 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    overflow-y: scroll;
    z-index: 1;
    padding: 15px;
    font-family: sans-serif;
    @media only screen and (max-width: 425px) {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
  `,
  Icon: styled.span`
    color: rgb(255, 197, 0);
  `,
};
