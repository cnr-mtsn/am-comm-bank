import React from "react";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, loans } from "../utils/data";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";


export default function Loans(props) {
	const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
	const piggyBank =
			"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/piggyBank_grlhma.png";
	const home = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038479/AmComm%20Bank/home_tkpk3d.jpg";
  return (
    <AccountPageWrapper>
      <FullWidthImage src={home} alt='Photo by Binyamin Mellish from Pexels' />
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
