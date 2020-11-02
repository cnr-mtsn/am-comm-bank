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

  const handleClick = () => {
    setType(!type);
  };
  return (
    <AccountPageWrapper>
      <TypeSelector>
        {type === true ? (
          <AccountPageHeader onClick={handleClick}>
            Personal Checking
          </AccountPageHeader>
        ) : (
          <AccountPageHeader onClick={handleClick}>
            Personal Savings
          </AccountPageHeader>
        )}
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
