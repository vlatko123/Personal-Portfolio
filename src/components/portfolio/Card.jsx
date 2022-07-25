import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = ({
  name,
  link,
  code,
  description,
  functionality,
  technologies,
  getData
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
    >
      <Styled.CardWrapper>
        <Styled.Content>
          <Styled.ProjectTitle>{name}</Styled.ProjectTitle>
          <Styled.Links>
            <Styled.Btn onClick={() => getData(name, link, code, description, functionality, technologies)}>More</Styled.Btn>
          </Styled.Links>
        </Styled.Content>
      </Styled.CardWrapper>
    </motion.div>
  );
};

const Styled = {
  CardWrapper: styled.div`
    min-width: 200px;
    min-height: 150px;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    overflow: hidden;
    margin: 20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media only screen and (max-width: 2560px) {
      min-width: 350px;
    }
    @media only screen and (max-width: 1440px) {
      min-width: 350px;
    }
    @media only screen and (max-width: 1300px) {
      min-width: 280px;
    }
    @media only screen and (max-width: 1200px) {
      min-width: 260px;
    }
    @media only screen and (max-width: 1024px) {
      min-width: 250px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    }
    @media only screen and (max-width: 768px) {
      min-width: 250px;
    }
    @media only screen and (max-width: 425px) {
      min-width: 310px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
    @media only screen and (max-width: 375px) {
      min-width: 280px;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    }
    @media only screen and (max-width: 320px) {
      min-width: 220px;
      
    }
  `,
  Content: styled.div`
    height: 100%;
    color: ${(props) => props.theme.color};
  `,
  ProjectTitle: styled.h5`
    text-align: center;
    @media only screen and (max-width: 2560px) {
      font-size: 35px;
    }
    @media only screen and (max-width: 1440px) {
      font-size: 25px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 32px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 25px;
    }
  `,
  Links: styled.div`
    display: flex;
    justify-content: center;
  `,
  Btn: styled.button`
    margin: 10px;
    padding: 5px 15px 5px 15px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    
    @media only screen and (max-width: 2560px) {
      min-width: 50px;
    }
    @media only screen and (max-width: 1440px) {
      min-width: 40px;
    }
    @media only screen and (max-width: 1024px) {
      min-width: 30px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 300px;
    }
    @media only screen and (max-width: 425px) {
      max-width: 150px;
    }
    @media only screen and (max-width: 375px) {
      max-width: 130px;
    }
  `,

};
