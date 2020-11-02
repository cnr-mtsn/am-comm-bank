import React from "react";
import InfoSection from "../components/InfoSection";
import { loans } from "../utils/servicesInfo";
import { AccountPageWrapper, AccountPageHeader } from "../components/styles";

export default function Loans(props) {
  return (
    <AccountPageWrapper>
      <AccountPageHeader>loan products</AccountPageHeader>
      <InfoSection type={loans} />
    </AccountPageWrapper>
  );
}
