import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import { checking, savings } from "../utils/servicesInfo";
import {
  AccountPageWrapper,
  AccountPageHeader,
  TypeSelector,
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
          style={{ color: type ? "black" : "lightslategrey" }}
          onClick={handleCheckingClick}
        >
          Personal Checking
        </AccountPageHeader>

        <AccountPageHeader
          style={{ color: !type ? "black" : "lightslategrey" }}
          onClick={handleSavingsClick}
        >
          Personal Savings
        </AccountPageHeader>
      </TypeSelector>
      {type === true ? (
        <>
          <InfoSection type={checking.personal.regular} />
          <InfoSection type={checking.personal.premium} />
          <InfoSection type={checking.personal.gold} />
          <InfoSection type={checking.personal.free} />
        </>
      ) : (
        <>
          <InfoSection type={savings.personal.regular} />
          <InfoSection type={savings.personal.childrens} />
          <InfoSection type={savings.personal.moneyMarket} />
          <InfoSection type={savings.personal.cd} />
        </>
      )}
    </AccountPageWrapper>
  );
}
