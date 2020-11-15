import React from "react";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, onlineBanking } from "../utils/data";
import {
  AccountPageWrapper,
  Container,
  CardSection,
} from "../components/styles";
import locate from "../media/locate.png";
import piggyBank from "../media/piggyBank.png";
export default function OnlineBanking() {
  return (
    <AccountPageWrapper>
      <Container>
        <div>
          <InfoSection type={onlineBanking} />
          <div
            style={{
              padding: "2.5rem 0 1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>{onlineBanking.contactMessage}</p>
            <a href='/'>{onlineBanking.bankingAgreementLink}</a>
            <p>{onlineBanking.creditCardOffer}</p>
          </div>
        </div>
        <CardSection>
          <SideCard image={locate} card={cards.locate} />
          <SideCard image={piggyBank} card={cards.piggyBank} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
