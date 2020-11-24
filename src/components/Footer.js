import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { device } from "../utils/device";

const Container = styled.footer`
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  display: flex;
  padding: 1rem 4rem;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  position: absolute;
  right: 0;
  left: 0;
`;
const Links = styled.div`
  display: flex;

  a {
    color: ${props => props.theme.colors.white};
    padding: 0.3rem;
  }
  .divider {
    font-size: 18px;
    font-weight: lighter;
    padding: 0 0.5rem;
    transform: translateY(2px);
  }
  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    a {
    }
    .divider {
      display: none;
    }
  }
`;
const Legal = styled.div`
  display: flex;
  flex-direction: column;

  .inner {
    display: flex;
    gap: 0.2rem;
  }
  p {
    color: lightgrey;
    font-size: 14px;
  }
  a {
    color: ${props => props.theme.colors.white};
  }
  .equalHousing {
    text-decoration: none;
  }

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    .inner {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <Links>
        <Link to='/privacyPolicy'>Privacy Policy</Link>
        <p className='divider'> | </p>
        <Link to='/siteMap'>Site Map</Link>
        <p className='divider'> | </p>
        <Link to='/reportOfCondition'>Report Of Condition</Link>
      </Links>

      <Legal>
        <div className='inner'>
          <a href='https://www.fdic.gov/'>Member FDIC</a>
          <a className='equalHousing' href='https://www.hud.gov/'>
            Equal Housing Lender
            <AiOutlineHome style={{ transform: "translateY(2px)" }} size={16} />
          </a>
        </div>
        <p>© 2020 America's Community Bank</p>
      </Legal>
    </Container>
  );
}
