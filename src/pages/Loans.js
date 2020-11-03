import React from "react";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, loans } from "../utils/data";
import {
  AccountPageWrapper,
  AccountPageHeader,
  Container,
  CardSection,
} from "../components/styles";
import piggyBank from "../media/piggyBank.png";
import online from "../media/online.png";
export default function Loans(props) {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>loan products</AccountPageHeader>
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
