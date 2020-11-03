import React from "react";
import { about, cards } from "../utils/data";
import SideCard from "../components/SideCard";
import online from "../media/online.png";
import locate from "../media/locate.png";
import {
  AccountPageWrapper,
  AccountPageHeader,
  Container,
  CardSection,
} from "../components/styles";
import InfoSection from "../components/InfoSection";

export default function About() {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>about acb</AccountPageHeader>
      <Container>
        <div>
          <InfoSection type={about} />
        </div>
        <CardSection>
          <SideCard image={online} card={cards.online} />
          <SideCard image={locate} card={cards.locate} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
