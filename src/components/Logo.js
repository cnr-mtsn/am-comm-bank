import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledImage = styled.img`
  width: 15rem;
  outline: 1px solid white;
  padding: 1rem;

  height: 5rem;
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
