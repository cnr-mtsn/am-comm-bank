import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { cards } from "../utils/data";
import checks from "../media/checks.png";
import online from "../media/online.png";
import contact from "../media/contact.png";
import SideCard from "../components/SideCard";

export default function CardSlider() {
  return (
    <CarouselProvider
      naturalSlideHeight={300}
      naturalSlideWidth={250}
      totalSlides={3}
    >
      <Slider style={{ background: "#eff1f3" }}>
        <Slide index={0}>
          <SideCard type='slider' image={contact} card={cards.contactUs} />
        </Slide>
        <Slide index={1}>
          <SideCard type='slider' image={online} card={cards.online} />
        </Slide>
        <Slide index={2}>
          <SideCard type='slider' image={checks} card={cards.checks} />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
