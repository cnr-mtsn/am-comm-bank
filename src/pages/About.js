import React from "react";
import { about, cards } from "../utils/data";
import SideCard from "../components/SideCard";
import online from "../media/online.png";
import locate from "../media/locate.png";
import { AccountPageWrapper, Container, CardSection, FullWidthImage } from "../components/styles";
import depositBoxes from "../media/depositBoxes.jpg";
import InfoSection from "../components/InfoSection";

export default function About() {
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
