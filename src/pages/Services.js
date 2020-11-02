import React from "react";
import { AccountPageWrapper, AccountPageHeader } from "../components/styles";
import InfoSection from "../components/InfoSection";
import { services } from "../utils/servicesInfo";

export default function Services() {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>Additional Services</AccountPageHeader>
      <InfoSection type={services} />
    </AccountPageWrapper>
  );
}
