import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../utils/device";
import { motion } from "framer-motion";
import { home } from "../utils/data";
import welcome from "../media/hero-welcome.jpg?nf_resize=fit";
import loans from "../media/hero-loans.jpg";
import personal from "../media/hero-personal.jpg";
import Accordion from "../components/Accordion";
import HomeCards from "../components/HomeCards";
import { homePageVariants } from "../utils/motion";

import CardSlider from "../components/CardSlider";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: absolute;
  .cardSlider {
    @media (min-width: 481px) {
      display: none;
    }
  }
  .homeCards {
    @media ${device.mobile} {
      display: none;
    }
  }
`;
const AccordionWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 0;
  align-items: flex-end;
  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
    gap: 0;
  }
`;
const StyledImage = styled(motion.img)`
  height: auto;
  width: 100vw;
`;

export default function Home() {
  const [image, setImage] = useState(welcome);

  const toggle1 = () => setImage(welcome);
  const toggle2 = () => setImage(loans);
  const toggle3 = () => setImage(personal);

  return (
    <Container
      initial='out'
      animate='in'
      exit='out'
      variants={homePageVariants}
    >
      <StyledImage src={image} />

      <AccordionWrapper>
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
      </AccordionWrapper>

      <div className='cardSlider'>
        <CardSlider />
      </div>
      <div className='homeCards'>
        <HomeCards />
      </div>
    </Container>
  );
}
