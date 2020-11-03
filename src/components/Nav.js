import React from "react";
import Logo from "../components/Logo";
import { IoMdSearch } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

import NavLinks from "../components/NavLinks";
import { StyledNav } from "../components/styles";
import { NavItems } from "../components/styles";
import { MenuIcon } from "../components/styles";
import { SearchIcon } from "../components/styles";

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
