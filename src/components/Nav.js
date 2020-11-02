import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { IoMdSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { device } from "../utils/device";
import NavLinks from "../components/NavLinks";

//logo, navItems
const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  button {
    margin: 0 1rem 0.3rem 1rem;
    border: none;
    border-radius: 0.9rem;
    width: 6rem;
    height: 2rem;
    background: #295da8;
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    text-transform: uppercase;
  }
  @media ${device.mobile} {
    justify-content: space-between;
    align-items: flex-end;
    button {
      display: none;
    }
  }
  @media ${device.tablet} {
    justify-content: space-between;
  }
  @media ${device.laptop} {
  }
`;

//links, search icon, login button, menu icon
const NavItems = styled.div`
  display: flex;
  padding: 1rem;
  @media ${device.tablet} {
    align-items: flex-end;
    padding: 1rem;
  }
  @media ${device.laptop} {
    justify-content: flex-end;
    align-items: center;
  }
`;

const MenuIcon = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
const SearchIcon = styled.div`
  margin: 0;
  padding: 0;
  @media ${device.mobile} {
    display: none;
  }
`;
export default function Nav() {
  return (
    <StyledNav>
      <Logo />
      <NavItems>
        <NavLinks />
        <SearchIcon>
          <IoMdSearch color='white' size={32} />
        </SearchIcon>
        <button>Login</button>
        <MenuIcon>
          <HiMenu color='white' size={32} />
        </MenuIcon>
      </NavItems>
    </StyledNav>
  );
}
