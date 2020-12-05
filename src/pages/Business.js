import React from "react";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, checking } from "../utils/data";
import online from "../media/online.png";
import contact from "../media/contact.png";
import business from "../media/business.jpg";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";

export default function Business(props) {
  return (
    <AccountPageWrapper>
      <FullWidthImage src={business} alt='Photo by fauxels from Pexels' />
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
