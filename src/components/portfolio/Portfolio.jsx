import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { projects } from "../../projects";
import { InfoModal } from "./InfoModal";

export const Portfolio = () => {
  const [state, setState] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setState(projects);
  }, []);

  const getData = (
    name,
    link,
    code,
    description,
    functionality,
    technologies
  ) => {
    let tempData = [name, link, code, description, functionality, technologies];
    setTempData((item) => [1, ...tempData]);
    return setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Styled.Container>
      {state.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            link={item.link}
            code={item.code}
            description={item.description}
            functionality={item.functionality}
            technologies={item.technologies}
            getData={() =>
              getData(
                item.name,
                item.link,
                item.code,
                item.description,
                item.functionality,
                item.technologies
              )
            }
          />
        );
      })}
      {show === true ? <InfoModal show={show} handleClose={handleClose} name={tempData[1]} link ={tempData[2]} code={tempData[3]} description={tempData[4]} functionality={tempData[5]} technologies={tempData[6]} /> : null}
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;

    @media only screen and (max-width: 1024px) {
      max-height: 72vh;
      overflow: scroll;
    }
    @media only screen and (max-width: 768px) {
      max-height: 70vh;
      overflow: scroll;
    }
  `,
};
