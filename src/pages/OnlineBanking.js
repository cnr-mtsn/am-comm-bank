import React from "react";
import InfoSection from "../components/InfoSection";
import SideCard from "../components/SideCard";
import { cards, onlineBanking } from "../utils/data";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage
} from "../components/styles";
import locate from "../media/locate.png";
import piggyBank from "../media/piggyBank.png";
import onlineBankingImage from '../media/online_banking.jpg';

export default function OnlineBanking() {
  return (
    <AccountPageWrapper>
      <FullWidthImage src={onlineBankingImage} alt="Photo by Anete Lusina from Pexels"/>
      <Container>
        <div>
          <InfoSection type={onlineBanking} />
          <div
            style={{
              padding: "2rem",
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
