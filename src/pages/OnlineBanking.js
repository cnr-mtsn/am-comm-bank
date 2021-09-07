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



export default function OnlineBanking() {
	const piggyBank =
			"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/piggyBank_grlhma.png";
	const locate = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/locate_sdnjxf.png";
	const onlineBankingImage =
		"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038465/AmComm%20Bank/online_banking_j0juqj.jpg";
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
