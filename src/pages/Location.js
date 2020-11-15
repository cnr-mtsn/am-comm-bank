import React from "react";
import { AccountPageWrapper } from "../components/styles";
import { location } from "../utils/data";
export default function Location() {
  return <AccountPageWrapper>{location.header}</AccountPageWrapper>;
}
