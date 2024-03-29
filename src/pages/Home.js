import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../utils/device";
import { motion } from "framer-motion";
import { home } from "../utils/data";

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
	const loans = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038466/AmComm%20Bank/hero-loans_ocpycp.jpg";
	const personal =
		"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/personal-man_qvceg7.jpg";
		const welcome =
			"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038466/AmComm%20Bank/hero-welcome_v886if.jpg";
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
