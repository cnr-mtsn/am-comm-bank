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
  @media ${device.tablet} {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
//logo, navItems
const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.blue};
  background-size: cover;
  width: 100vw;
  display: flex;
  height: 7.55rem;

  @media ${device.mobile} {
    align-items: flex-end;
  }
  @media ${device.desktop} {
    justify-content: space-between;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 0.9rem;
  width: 5rem;
  margin: 0.5rem;
  height: 2rem;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  text-transform: uppercase;
`;

//links, search icon, login button, menu icon
const NavItems = styled.div`
  display: flex;
  @media ${device.tablet} {
    align-items: center;
    padding: 1rem;
  }
  @media ${device.laptop} {
    justify-content: flex-end;
    align-items: center;
  }
  .loginButton {
    @media ${device.mobile} {
      display: none;
    }
    @media (min-width: 481px) {
      display: initial;
    }
  }
`;

const MenuIcon = styled.div`
  @media ${device.laptop} {
    display: initial;
    padding: 0 0.5rem 0 0;
  }
  @media (min-width: 1025px) {
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
    padding: 1rem;
    margin: 1rem;
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
`;
const StyledSliderCard = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    text-align: center;
    img {
      height: auto;
      width: 5rem;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 18px;
      font-weight: 300;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }
    p {
      font-weight: 100;
      letter-spacing: 0.7px;
      line-height: 16pt;
    }
    a {
      margin: 2rem;
      text-transform: capitalize;
      font-size: 16px;
      font-weight: bolder;
    }
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
  StyledSliderCard,
  StyledButton,
  CardSection,
};
