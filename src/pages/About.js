import React from "react";
import { about, cards } from "../utils/data";
import SideCard from "../components/SideCard";
import { AccountPageWrapper, Container, CardSection, FullWidthImage } from "../components/styles";

import InfoSection from "../components/InfoSection";

export default function About() {
		const online = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/online_fnpash.png";
		const locate = "https://res.cloudinary.com/cnrmtsn/image/upload/v1631038464/AmComm%20Bank/locate_sdnjxf.png";
	const depositBoxes =
		"https://res.cloudinary.com/cnrmtsn/image/upload/v1631038475/AmComm%20Bank/depositBoxes_dfiphw.jpg";
	return (
		<AccountPageWrapper>
			<FullWidthImage src={depositBoxes} alt="Photo by Tim Evans on Unsplash" />
			<Container>
				<InfoSection type={about} />
				<CardSection>
					<SideCard image={online} card={cards.online} />
					<SideCard image={locate} card={cards.locate} />
				</CardSection>
			</Container>
		</AccountPageWrapper>
	);
}
