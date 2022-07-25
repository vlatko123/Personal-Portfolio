import React, { useState } from "react";
import styled from "styled-components";
import { FaHandPointDown } from "react-icons/fa";
import { Details } from "./Details";
import { motion } from "framer-motion";

export const Experience = () => {
  const [content, setContent] = useState(false);

  const contentHandler = () => {
    setContent(content === false ? true : false);
  };
  return (
    <motion.div
      animate={{ y: 10 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Styled.Container>
        <Styled.Title onClick={contentHandler}>
          Current job{" "}
          <Styled.Span>
            <FaHandPointDown />
          </Styled.Span>
        </Styled.Title>
        {content === true ? <Details /> : null}
      </Styled.Container>
    </motion.div>
  );
};

const Styled = {
  Container: styled.div`
    width: 600px;
    @media only screen and (max-width: 768px) {
      max-width: 400px;
    }
    @media only screen and (max-width: 425px) {
      max-width: 350px;
    }
    @media only screen and (max-width: 375px) {
      max-width: 300px;
    }
    @media only screen and (max-width: 320px) {
      max-width: 250px;
    }
  `,
  Title: styled.h3`
    border-radius: 10px;
    text-align: center;
    padding: 10px 0 10px 0;
    background: rgba(59, 59, 255, 0.8);
    color: rgb(24, 255, 144);
    backdrop-filter: blur(2px);
  }
  `,
  Span: styled.span`
    color: rgb(255, 197, 0);
  `,
};
