import React from "react";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, loans } from "../utils/data";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";
import piggyBank from "../media/piggyBank.png";
import online from "../media/online.png";
import home from "../media/home.jpg";
export default function Loans(props) {
  return (
    <AccountPageWrapper>
      <FullWidthImage src={home} alt='Photo by Binyamin Mellish from Pexels' />
      <Container>
        <div>
          <InfoSection type={loans} />
        </div>
        <CardSection>
          <SideCard image={piggyBank} card={cards.piggyBank} />
          <SideCard image={online} card={cards.online} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
