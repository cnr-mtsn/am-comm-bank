import React from "react";
import {
  AccountPageWrapper,
  Container,
  CardSection,
} from "../components/styles";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { checks, cards } from "../utils/data";

export default function Checks() {
	const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
	const piggyBank =
			"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/piggyBank_grlhma.png";
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
