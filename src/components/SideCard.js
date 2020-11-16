import React from "react";

import {
  StyledCard,
  StyledSliderCard,
  StyledHomeCard,
} from "../components/styles";

import { cardVariants, cardTransition } from "../utils/motion";

export default function SideCard({ card, image, type }) {
  return type === "slider" ? (
    <StyledSliderCard
      initial='out'
      animate='in'
      exit='out'
      variants={cardVariants}
      transition={cardTransition}
    >
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href={card.link.url}>{card.link.text}</a>
    </StyledSliderCard>
  ) : type === "home" ? (
    <StyledHomeCard
      initial='out'
      animate='in'
      exit='out'
      variants={cardVariants}
      transition={cardTransition}
    >
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href={card.link.url}>{card.link.text}</a>
    </StyledHomeCard>
  ) : (
    <StyledCard
      initial='out'
      animate='in'
      exit='out'
      variants={cardVariants}
      transition={cardTransition}
    >
      <img src={image} alt={card.header} />
      <h3>{card.header}</h3>
      <p>{card.description}</p>
      <a href={card.link.url}>{card.link.text}</a>
    </StyledCard>
  );
}
