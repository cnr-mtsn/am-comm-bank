import React, { useState } from "react";
import styled from "styled-components";
import InfoSection from "../components/InfoSection";
import SideCard from "../components/SideCard";
import { cards, checking, savings } from "../utils/data";
import {
  AccountPageWrapper,
  TypeSelector,
  Container,
  CardSection,
  FullWidthImage,
} from "../components/styles";

import checks from "../media/checks.png";
import online from "../media/online.png";
import piggyBank from "../media/piggyBank.png";
import locate from "../media/locate.png";
import personal from "../media/personal-man.jpg";

const PersonalHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 2rem;
  border: none;
  border-radius: 15px;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.blue};
`;

export default function Personal(props) {
  const [type, setType] = useState(true);

  const handleCheckingClick = () => {
    setType(true);
  };
  const handleSavingsClick = () => {
    setType(false);
  };

  return (
    <AccountPageWrapper>
      <FullWidthImage
        src={personal}
        alt='Photo by Karolina Grabowska from Pexels'
      />
      <TypeSelector>
        <PersonalHeader
          style={{
            color: type ? "navy" : "lightslategrey",
            fontSize: type ? "1.2rem" : ".6rem",
            lineHeight: type ? "1" : "1.5",
            cursor: "pointer",
            marginRight: "1rem",
            transition: ".5s ease",
          }}
          onClick={handleCheckingClick}
        >
          Personal Checking
        </PersonalHeader>

        <PersonalHeader
          style={{
            color: !type ? "navy" : "lightslategrey",
            fontSize: !type ? "1.2rem" : ".6rem",
            lineHeight: !type ? "1" : "1.5",
            cursor: "pointer",
            marginLeft: "1rem",
            transition: ".5s ease",
          }}
          onClick={handleSavingsClick}
        >
          Personal Savings
        </PersonalHeader>
      </TypeSelector>
      {type === true ? (
        <Container>
          <div>
            <InfoSection type={checking.personal.regular} />
            <InfoSection type={checking.personal.premium} />
            <InfoSection type={checking.personal.gold} />
            <InfoSection type={checking.personal.free} />
          </div>
          <CardSection>
            <SideCard image={online} card={cards.online} />
            <SideCard image={piggyBank} card={cards.piggyBank} />
          </CardSection>
        </Container>
      ) : (
        <Container>
          <div>
            <InfoSection type={savings.personal.regular} />
            <InfoSection type={savings.personal.childrens} />
            <InfoSection type={savings.personal.moneyMarket} />
            <InfoSection type={savings.personal.cd} />
          </div>
          <CardSection>
            <SideCard image={locate} card={cards.locate} />
            <SideCard image={checks} card={cards.checks} />
          </CardSection>
        </Container>
      )}
    </AccountPageWrapper>
  );
}
