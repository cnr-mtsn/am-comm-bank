import React from "react";
import InfoSection from "../components/InfoSection";
import styled from "styled-components";
import SideCard from "../components/SideCard";
import { cards, checking } from "../utils/data";
import online from "../media/online.png";
import contact from "../media/contact.png";
import {
  AccountPageWrapper,
  Container,
  CardSection,
} from "../components/styles";

const BusinessHeader = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  padding: 1rem;
  margin: 0;
`;

export default function Business(props) {
  return (
    <AccountPageWrapper>
      <BusinessHeader>Business Checking</BusinessHeader>
      <Container>
        <div>
          <InfoSection type={checking.business.commercial} />
          <InfoSection type={checking.business.lowVolume} />
          <InfoSection type={checking.business.nonProfit} />
          <InfoSection type={checking.business.commercialMoneyMarket} />
        </div>
        <CardSection>
          <SideCard image={online} card={cards.online} />
          <SideCard image={contact} card={cards.contactUs} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
