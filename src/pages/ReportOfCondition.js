import React from "react";
import { AccountPageWrapper } from "../components/styles";
import { reportOfCondition } from "../utils/data";
import InfoSection from "../components/InfoSection";

export default function ReportOfCondition() {
  return (
    <AccountPageWrapper>
      <div style={{height: "70vh"}}>

      <InfoSection type={reportOfCondition} />
      </div>
    </AccountPageWrapper>
  );
}
