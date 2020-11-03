import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledImage = styled.img`
  width: 35vw;

  padding: 1rem;

  max-height: 5rem;
`;
export default function Logo() {
  return (
    <Link to='/'>
      <StyledImage
        alt='logo'
        src='https://www.amcommbank.com/assets/img/Americas-Community-Bank-logo.svg'
      />
    </Link>
  );
}
