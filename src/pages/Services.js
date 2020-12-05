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
import lend from "../media/lend.png";
import online from "../media/online.png";
import servicePic from "../media/services-img.jpg";
export default function Services() {
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
