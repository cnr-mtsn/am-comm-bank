import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import SideCard from "../components/SideCard";
import { checking, savings } from "../utils/servicesInfo";
import {
  AccountPageWrapper,
  AccountPageHeader,
  TypeSelector,
  Container,
} from "../components/styles";

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
      <TypeSelector>
        <AccountPageHeader
          style={{
            color: type ? "black" : "lightslategrey",
            fontSize: type ? "1.3rem" : "1rem",
            lineHeight: type ? "1" : "1.5",
            cursor: "pointer",
            marginRight: "1rem",
          }}
          onClick={handleCheckingClick}
        >
          Personal Checking
        </AccountPageHeader>

        <AccountPageHeader
          style={{
            color: !type ? "black" : "lightslategrey",
            fontSize: !type ? "1.3rem" : "1rem",
            lineHeight: !type ? "1" : "1.5",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
          onClick={handleSavingsClick}
        >
          Personal Savings
        </AccountPageHeader>
      </TypeSelector>
      {type === true ? (
        <Container>
          <div>
            <InfoSection type={checking.personal.regular} />
            <InfoSection type={checking.personal.premium} />
            <InfoSection type={checking.personal.gold} />
            <InfoSection type={checking.personal.free} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SideCard />
            <SideCard />
          </div>
        </Container>
      ) : (
        <Container>
          <div>
            <InfoSection type={savings.personal.regular} />
            <InfoSection type={savings.personal.childrens} />
            <InfoSection type={savings.personal.moneyMarket} />
            <InfoSection type={savings.personal.cd} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <SideCard />
            <SideCard />
          </div>
        </Container>
      )}
    </AccountPageWrapper>
  );
}
