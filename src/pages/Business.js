import React from "react";
import InfoSection from "../components/InfoSection";
import SideCard from "../components/SideCard";
import { cards, checking } from "../utils/data";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";

export default function Business(props) {

	const business =
		"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038479/AmComm%20Bank/business_u2f3hn.jpg";
		const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
		const contact = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038465/AmComm%20Bank/contact_u5fjae.png";
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
