import React, { useState } from "react";
import styled from "styled-components";

import { home } from "../utils/data";
import welcome from "../media/hero-welcome.jpg";
import loans from "../media/hero-loans.jpg";
import personal from "../media/hero-personal.jpg";
import Accordion from "../components/Accordion";

import CardSlider from "../components/CardSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const StyledImage = styled.img`
  height: auto;
  width: 100vw;
`;

export default function Home() {
  const [image, setImage] = useState(welcome);

  const toggle1 = () => setImage(welcome);
  const toggle2 = () => setImage(loans);
  const toggle3 = () => setImage(personal);

  return (
    <Container>
      <StyledImage src={image} />
      <div onClick={toggle1}>
        <Accordion
          title={home.welcome.title}
          content={home.welcome.description}
          button={home.welcome.button}
          route={home.welcome.route}
        />
      </div>
      <div onClick={toggle2}>
        <Accordion
          title={home.loans.title}
          content={home.loans.description}
          button={home.loans.button}
          route={home.loans.route}
        />
      </div>
      <div onClick={toggle3}>
        <Accordion
          title={home.personal.title}
          content={home.personal.description}
          button={home.personal.button}
          route={home.personal.route}
        />
      </div>

      <CardSlider />
    </Container>
  );
}
