import React from "react";
import { StyledCard, StyledSliderCard } from "../components/styles";

export default function SideCard({ card, image, type }) {
  return type === "slider" ? (
    <StyledSliderCard>
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href='/'>{card.link}</a>
    </StyledSliderCard>
  ) : (
    <StyledCard>
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href='/'>{card.link}</a>
    </StyledCard>
  );
}
