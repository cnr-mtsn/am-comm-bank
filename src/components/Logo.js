import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const StyledImage = styled.img`
  width: 40vw;
  padding: 1rem;
  min-width: 8rem;
  max-height: 6rem;
`;
export default function Logo() {
  return (
    <StyledImage
      alt='logo'
      src='https://www.amcommbank.com/assets/img/Americas-Community-Bank-logo.svg'
    />
  );
}
