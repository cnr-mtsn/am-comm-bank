import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { cards } from "../utils/data";
import SideCard from "../components/SideCard";

export default function CardSlider() {
	const checks = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038466/AmComm%20Bank/checks_nz3der.png";
	const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
	const contact = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038465/AmComm%20Bank/contact_u5fjae.png";
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
