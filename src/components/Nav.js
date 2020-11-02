import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { IoMdSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { device } from "../utils/device";
import NavLinks from "../components/NavLinks";

const StyledNav = styled.nav`
  display: flex;
  background-color: ${props => props.theme.colors.blue};
  align-items: center;
  max-height: 5rem;
  padding: 1rem;

  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      border-radius: 0.9rem;
      max-height: 2.2rem;
      line-height: 0.5;
      background: #295da8;
      color: ${props => props.theme.colors.white};
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
  @media ${device.tablet} {
    padding-left: 15vw;
    padding-right: 15vw;
  }
  p {
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    margin: 1rem;
    font-weight: 100;
    font-size: 1rem;
  }
  button {
    border: none;
    border-radius: 0.9rem;
    padding: 1rem;
    max-height: 2.5rem;
    width: 6rem;
    line-height: 0.5;
    background: #295da8;
    color: ${props => props.theme.colors.white};
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

const NavItems = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: flex-end;
    height: 5rem;
    width: auto;
    button {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  @media ${device.laptop} {
    align-items: center;
    .hamburger {
      display: none;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Logo />
      <NavItems>
        <NavLinks className='links' />
        <IoMdSearch color='white' size={32} />
        <button>Login</button>
        <div className='hamburger'>
          <HiMenu color='white' size={32} />
        </div>
      </NavItems>
    </StyledNav>
  );
}
