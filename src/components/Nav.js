import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";
import { device } from "../utils/device";
import {
  StyledNav,
  StyledButton,
  NavItems,
  MenuIcon,
  SearchIcon,
} from "../components/styles";

import { AiOutlineClose } from "react-icons/ai";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.colors.blue};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 40%;
  }

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
    transition: color 0.3s linear;
    margin: 0;
    padding: 1rem;
    text-decoration: none;

    @media (max-width: 576px) {
      font-size: 0.8rem;
      text-align: left;
      letter-spacing: 0.2rem;
    }

    &:hover {
      color: #343078;
    }
  }
`;
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  margin-bottom: 0.3rem;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "transparent" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const MenuCloseButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  @media ${device.mobile} {
    display: initial;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MenuCloseButton onClick={() => setOpen(!open)}>
        <AiOutlineClose size={24} />
      </MenuCloseButton>

      <Link to='/personal'>
        <p>Personal</p>
      </Link>
      <Link to='/business'>
        <p>Business</p>
      </Link>
      <Link to='/loans'>
        <p>Loans</p>
      </Link>
      <Link to='/services'>
        <p>Services</p>
      </Link>
      <Link to='/about'>
        <p>About Us</p>
      </Link>
    </StyledMenu>
  );
};
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default function Nav({ navOpen }) {
  const [open, setOpen] = useState(navOpen);

  return (
    <StyledNav>
      <Logo />

      <NavItems>
        <NavLinks />

        <SearchIcon>
          <IoMdSearch color='white' size={32} />
        </SearchIcon>

        <StyledButton className='loginButton'>Login</StyledButton>

        <MenuIcon>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </MenuIcon>
      </NavItems>
    </StyledNav>
  );
}
