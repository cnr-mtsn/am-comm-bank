import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../utils/device";
import { IoIosArrowUp } from "react-icons/io";
const Container = styled.div`
  background: black;
  opacity: 0.6;
  margin: 0;
  padding: 0;
  border-radius: 5px;

  @media ${device.tablet} {
    margin-bottom: 0.3rem;
    transform: none;
    opacity: 1;
  }
  /* Style the accordion section */
  .accordionSection {
    display: flex;
    flex-direction: column;
  }

  .arrow {
    @media ${device.tablet} {
      display: none;
    }
    transform: translateX(-0.3rem);
  }
  .rotate {
    transform: rotate(180deg);
    transition: 0.6s ease;
  }

  .trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    @media ${device.tablet} {
      width: 100vw;

      background-color: ${props => props.theme.colors.darkGrey};
    }
    background: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    border: none;
    outline: none;
    height: auto;
    width: 25vw;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .accordion:hover,
  .active {
    opacity: 0.8;
  }

  /* Style the accordion content title */
  .accordionTitle {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* Style the accordion content panel. Note: hidden by default */
  .accordionContent {
    @media ${device.tablet} {
      background-color: white;
    }
    overflow: hidden;
    transition: max-height 0.6s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 12;
  }

  /* Style the accordion content text */
  .accordionText {
    @media ${device.tablet} {
      width: 80vw;
      padding: 0.5rem 1.5rem 0 1.5rem;
      margin: 2rem 0 0.5rem 0;
      color: grey;
    }
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 25vw;
    text-align: center;
    line-height: 15pt;
    padding: 0.5rem 1rem 0rem 1rem;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 0.9rem;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  padding: 11px 32px;
  margin: 2rem 0 1rem 0;
`;

export default function Accordion(props) {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("");
  const content = useRef(null);

  const toggle = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`,
    );
    setRotate(rotate === "" ? "rotate" : "");
  };

  return (
    <Container className='accordionSection'>
      <div className='trigger' onClick={toggle}>
        <button className={`accordion ${active}`}>
          <p className='accordionTitle'>{props.title}</p>
        </button>
        <IoIosArrowUp className={`arrow ${rotate}`} size={24} color='white' />
      </div>
      <div
        className='accordionContent'
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        <div
          className='accordionText'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <Link to={props.route}>
          <StyledButton>{props.button}</StyledButton>
        </Link>
      </div>
    </Container>
  );
}
