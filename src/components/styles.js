import styled from "styled-components";
import { device } from "../utils/device";
const TypeSelector = styled.div`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    justify-content: center;
  }
`;
const AccountPageWrapper = styled.div`
  margin: 3rem 10vw 0 10vw;
`;
const AccountPageHeader = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.mobile} {
    flex-direction: column;
  }
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
//logo, navItems
const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.blue};
  display: flex;
  height: 6.5rem;
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
  @media ${device.desktop} {
    justify-content: space-between;
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
const StyledCard = styled.div`
  @media ${device.desktop} {
    height: auto;
    width: 15rem;
    border: 4px solid lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 3rem 0;
    padding: 1rem;
    img {
      height: 8rem;
      padding: 1rem;
    }
    h3 {
      padding: 0;
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      font-weight: lighter;
    }
    p {
      text-align: center;
      font-weight: lighter;
    }
    a {
      padding: 1rem;
      text-transform: capitalize;
      text-decoration: none;
      text-align: center;
    }
  }
  @media ${device.tablet} {
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  TypeSelector,
  AccountPageHeader,
  AccountPageWrapper,
  Container,
  StyledNav,
  NavItems,
  MenuIcon,
  SearchIcon,
  StyledCard,
  CardSection,
};
