import React from "react";
import {
  AccountPageWrapper,
  Container,
  CardSection,
} from "../components/styles";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { checks, cards } from "../utils/data";
import online from "../media/online.png";
import piggyBank from "../media/piggyBank.png";
export default function Checks() {
  return (
    <AccountPageWrapper>
      <Container>
        <div>
          <InfoSection type={checks} />
        </div>
        <CardSection>
          <SideCard image={online} card={cards.online} />
          <SideCard image={piggyBank} card={cards.piggyBank} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
