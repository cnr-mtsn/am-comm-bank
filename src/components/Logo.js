import React from "react";
import styled from "styled-components";
import { device } from "../utils/device";

const StyledImage = styled.img`
  @media ${device.mobile} {
    max-height: 105px;
    max-width: 210px;
  }
  @media ${device.tablet} {
    margin-right: 1rem;
  }
  @media ${device.laptop} {
  }
`;
export default function Logo() {
  return (
    <StyledImage
      alt='logo'
      src='https://www.amcommbank.com/assets/img/Americas-Community-Bank-logo.svg'
    />
  );
}
