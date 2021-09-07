import React from "react";
import {
  AccountPageWrapper,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";
import InfoSection from "../components/InfoSection";

import SideCard from "../components/SideCard";
import { cards, services } from "../utils/data";


export default function Services() {
	const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
	const lend = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/lend_z3rg5h.png";
	const servicePic = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/services-img_jgxxjv.jpg";
  return (
    <AccountPageWrapper>
      <FullWidthImage
        src={servicePic}
        alt='Photo by Andrea Piacquadio from Pexels'
      />
      <Container>
        <div>
          <InfoSection type={services} />
          <div
            style={{
              padding: "2.5rem 0 1rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p>
              <a href={services.contactMessage.url}>
                {services.contactMessage.linkText}
              </a>
              {services.contactMessage.text}
            </p>
            <p>{services.debitCardMessage}</p>
          </div>
        </div>
        <CardSection>
          <SideCard image={lend} card={cards.loan} />
          <SideCard image={online} card={cards.online} />
        </CardSection>
      </Container>
    </AccountPageWrapper>
  );
}
