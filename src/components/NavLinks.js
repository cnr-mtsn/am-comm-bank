import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/device";
const Links = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
    p {
      display: none;
    }
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: space-evenly;
    p {
      padding: 1.2rem;
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      font-weight: lighter;
    }
  }
  @media ${device.desktop} {
  }
`;
export default function NavLinks() {
  return (
    <Links>
      {" "}
      <Link to='/personal'>
        <p>personal</p>
      </Link>
      <Link to='/business'>
        <p>business</p>
      </Link>
      <Link to='/loans'>
        <p>loans/mortgage</p>
      </Link>
      <Link to='/services'>
        <p>services</p>
      </Link>
      <Link to='/about'>
        <p>about</p>
      </Link>
    </Links>
  );
}
