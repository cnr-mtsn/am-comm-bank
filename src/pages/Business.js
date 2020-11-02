import React from "react";
import InfoSection from "../components/InfoSection";
import { checking } from "../utils/servicesInfo";

import { AccountPageWrapper, AccountPageHeader } from "../components/styles";

export default function Business(props) {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>Business Checking</AccountPageHeader>
      <InfoSection type={checking.business.commercial} />
      <InfoSection type={checking.business.lowVolume} />
      <InfoSection type={checking.business.nonProfit} />
      <InfoSection type={checking.business.commercialMoneyMarket} />
    </AccountPageWrapper>
  );
}
