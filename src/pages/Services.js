import React from "react";
import {
  AccountPageWrapper,
  AccountPageHeader,
  Container,
  CardSection,
} from "../components/styles";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, services } from "../utils/data";
import lend from "../media/lend.png";
import online from "../media/online.png";
export default function Services() {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>Additional Services</AccountPageHeader>
      <Container>
        <div>
          <InfoSection type={services} />
        </div>
        <CardSection>
          <SideCard image={lend} card={cards.loan} />
          <SideCard image={online} card={cards.online} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
