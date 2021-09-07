import React from "react";
import styled from "styled-components";
import { cards } from "../utils/data";
import SideCard from "../components/SideCard";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1rem 2rem;
`;
const Divider = styled(motion.div)`
  height: 8rem;
  width: 1px;
  background: grey;
  margin: 6rem 0 0 0;
`;
const dividerVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
    },
  },
  out: {
    opacity: 0,
  },
};

export default function HomeCards() {
		const checks = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038466/AmComm%20Bank/checks_nz3der.png";
		const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
		const contact = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038465/AmComm%20Bank/contact_u5fjae.png";
  return (
    <Container>
      <SideCard type='home' image={contact} card={cards.contactUs} />

      <Divider variants={dividerVariants} />
      <SideCard type='home' image={online} card={cards.online} />
      <Divider variants={dividerVariants} />
      <SideCard type='home' image={checks} card={cards.checks} />
    </Container>
  );
}
