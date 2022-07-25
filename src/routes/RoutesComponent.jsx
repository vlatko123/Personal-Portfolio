import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Intro } from "../components/Intro";
import { About } from "../components/about/About";
import { Portfolio } from "../components/portfolio/Portfolio";
import { Training } from "../components/about/training/Training";
import { Experience } from "../components/about/experience/Experience";

export const RoutesComponent = () => {
  return (
    <Styled.ContentContainer className="row">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="about" element={<About />}>
          <Route path="experience" element={<Experience />} />
          <Route path="training" element={<Training />} />
        </Route>
        <Route path="portfolio" element={<Portfolio />} />
        <Route
          path="*"
          element={
            <div style={{ color: "black" }}>This page doesn't exist</div>
          }
        />
      </Routes>
    </Styled.ContentContainer>
  );
};

const Styled = {
  ContentContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
};
