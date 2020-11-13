import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 0.3rem;

  /* Style the accordion section */
  .accordionSsection {
    display: flex;
    flex-direction: column;
  }

  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    background-color: ${props => props.theme.colors.darkGrey};
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    width: 100vw;
    border: none;
    outline: none;
    height: auto;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .accordion:hover,
  .active {
  }

  /* Style the accordion content title */
  .accordionTitle {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* Style to rotate icon when state is active */
  .rotate {
    transform: rotate(90deg);
  }

  /* Style the accordion content panel. Note: hidden by default */
  .accordionContent {
    background-color: white;
    overflow: hidden;
    transition: max-height 0.6s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Style the accordion content text */
  .accordionText {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: grey;
    text-align: center;
    padding: 0.5rem 1.5rem 0 1.5rem;
    line-height: 15pt;
    margin: 2rem 0 0.5rem 0;
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
  const content = useRef(null);

  const toggle = () => {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${content.current.scrollHeight}px`,
    );
  };

  return (
    <Container className='accordionSection'>
      <button className={`accordion ${active}`} onClick={toggle}>
        <p className='accordionTitle'>{props.title}</p>
      </button>
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
