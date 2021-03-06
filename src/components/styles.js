import styled from "styled-components";
import { device } from "../utils/device";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../utils/motion";
import Footer from "../components/Footer";

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
const StyledAccountPageWrapper = styled(motion.div)`
	min-height: 90vh;
	position: absolute;
	left: 0;
	right: 0;
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 3rem 1rem;
		button {
			color: #fff;
			background-color: #020864;
			border-color: #020864;
			font-weight: 400;
			text-decoration: none;
			text-transform: uppercase;
			border: 0.0625rem solid #295da8;
			padding: 0.6875rem 2rem;
			font-size: 0.875rem;
			line-height: 1.42857;
			border-radius: 1rem;
		}
		p {
			color: #1a936f;
		}
		label {
			font-weight: 300;
			color: #6d6e71;
			letter-spacing: 0.8pt;
		}
		input,
		select {
			margin: 0.2rem 0 1.5rem 0;
			width: 100%;
			display: block;
			width: 100%;
			height: 2.5rem;
			padding: 0.375rem 0.75rem;
			font-size: 1rem;
			line-height: 1.42857;
			color: #727070;
			background-color: #fff;
			border: 0.0625rem solid #e3e3e3;
		}
		textarea {
			margin: 0.2rem 0 1.5rem 0;
			width: 100%;
			display: block;
			width: 100%;
			height: 8rem;
			padding: 0.375rem 0.75rem;
			font-size: 1rem;
			line-height: 1.42857;
			color: #727070;
			background-color: #fff;
			border: 0.0625rem solid #e3e3e3;
		}
	}
`;
const AccountPageWrapper = ({ children }) => (
  <StyledAccountPageWrapper
    initial='initial'
    animate='in'
    exit='out'
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
    <Footer />
  </StyledAccountPageWrapper>
);

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90vw;
  padding: 1rem;

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
  a {
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  }
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
const StyledCard = styled(motion.div)`
  @media ${device.desktop} {
    width: 25vw;
    border: 4px solid lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
    img {
      height: 9rem;
      padding: 1rem;
    }
    h3 {
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: lighter;
    }
    p {
      text-align: center;
      font-weight: lighter;
      width: 85%;
      margin: 1rem auto;
    }
    a {
      padding: 1rem;
      text-transform: capitalize;
      text-decoration: underline;
      text-align: center;
    }
  }
  @media ${device.tablet} {
    margin: 1rem auto;
    width: 80%;
  }
`;
const StyledSliderCard = styled(motion.div)`
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
const StyledHomeCard = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 6rem;
    margin: 0 0 1rem 0;
  }
  h3 {
    font-weight: lighter;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    margin: 0.5rem 0 1rem 0;
  }
  p {
    text-align: center;
    color: grey;
    line-height: 16pt;
  }
  a {
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 1rem;
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FullWidthImage = styled.img`
  width: 100vw;
  height: auto;
`;

const Header = styled.h2`
	padding: 2rem 1rem;
	text-transform: uppercase;
	font-size: 1.3rem;
`;

export {
  TypeSelector,
  AccountPageWrapper,
  Container,
  StyledNav,
  NavItems,
  MenuIcon,
  SearchIcon,
  StyledCard,
  StyledSliderCard,
  StyledHomeCard,
  StyledButton,
  CardSection,
  FullWidthImage,
  Header
};
