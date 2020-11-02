import React from "react";
import { about } from "../utils/servicesInfo";
import { AccountPageWrapper, AccountPageHeader } from "../components/styles";
import InfoSection from "../components/InfoSection";

export default function About() {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>about acb</AccountPageHeader>
      <InfoSection type={about} />
    </AccountPageWrapper>
  );
}
