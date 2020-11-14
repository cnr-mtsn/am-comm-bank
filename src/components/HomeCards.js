import React from "react";
import styled from "styled-components";
import { cards } from "../utils/data";
import checks from "../media/checks.png";
import online from "../media/online.png";
import contact from "../media/contact.png";
import SideCard from "../components/SideCard";

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  padding: 1rem 2rem;
`;
const Divider = styled.div`
  height: 8rem;
  width: 1px;
  background: grey;
  margin: 6rem 0 0 0;
`;

export default function HomeCards() {
  return (
    <Container>
      <SideCard type='home' image={contact} card={cards.contactUs} />

      <Divider />
      <SideCard type='home' image={online} card={cards.online} />
      <Divider />
      <SideCard type='home' image={checks} card={cards.checks} />
    </Container>
  );
}
