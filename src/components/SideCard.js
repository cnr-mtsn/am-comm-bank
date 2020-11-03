import React from "react";
import { StyledCard } from "../components/styles";

export default function SideCard({ card, image }) {
  return (
    <StyledCard>
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href='/'>{card.link}</a>
    </StyledCard>
  );
}
