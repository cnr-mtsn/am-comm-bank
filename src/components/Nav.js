import React, { useState } from "react";
import Logo from "../components/Logo";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";
import { device } from "../utils/device";
import { StyledNav } from "../components/styles";
import { StyledButton } from "../components/styles";
import { NavItems } from "../components/styles";
import { MenuIcon } from "../components/styles";
import { SearchIcon } from "../components/styles";
import { AiOutlineClose } from "react-icons/ai";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.colors.blue};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 40%;
  }

  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 1rem 0 0 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
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
  padding: 0;
  z-index: 10;

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

      <a href='/personal'>Personal</a>
      <a href='/business'>Business</a>
      <a href='/loans'>Loans</a>
      <a href='/services'>Services</a>
      <a href='/about'>About Us</a>
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

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <Logo />

      <NavItems>
        <NavLinks />

        <SearchIcon>
          <IoMdSearch color='white' size={32} />
        </SearchIcon>

        <StyledButton>Login</StyledButton>

        <MenuIcon>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </MenuIcon>
      </NavItems>
    </StyledNav>
  );
}
