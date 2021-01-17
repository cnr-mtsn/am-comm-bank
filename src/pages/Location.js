import React from "react";
import styled from "styled-components";
import { AccountPageWrapper } from "../components/styles";
import { location } from "../utils/data";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 1rem 0 2rem 2rem;
	align-items: flex-start;
	height: 800px;
	div {
		h4 {
			margin: 0.5rem 0 0 0;
			font-weight: 500;
		}
		h3 {
			color: ${props => props.theme.colors.lightBlue};
			font-weight: 600;
			font-family: sans-serif;
			text-transform: uppercase;
		}
	}
	p {
		color: ${props => props.theme.colors.darkGrey};
	}
	.blue-springs-office {
		h3 {
			color: ${props => props.theme.colors.blue};
		}
		p {
			margin-top: 0.5rem;
		}
	}
	.bottom {
		p {
			margin-top: 3rem;
			font-style: italic;
			color: ${props => props.theme.colors.darkGrey};
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
				"Open Sans", "Helvetica Neue", sans-serif;
		}
	}
`;
export default function Location(props) {
	return (
		<AccountPageWrapper>
			<Container>
				<h2>{location.header}</h2>
				<div className="blue-springs-office">
					<h3>Blue Springs Office</h3>
					<p>{location.address}</p>
					<p>Phone: {location.phone}</p>
					<p>Fax: {location.fax}</p>
				</div>
				<div>
					<h3>Lobby Hours</h3>
					<h4>Mon-Fri</h4>
					<p>{location.hours.lobby.weekday}</p>
					<h4>Saturday</h4>
					<p>{location.hours.lobby.saturday}</p>
				</div>
				<div>
					<h3>Drive Up Hours</h3>
					<h4>Mon-Fri</h4>
					<p>{location.hours.driveUp.weekday}</p>
					<h4>Saturday</h4>
					<p>{location.hours.driveUp.saturday}</p>
				</div>
				<div className="bottom">
					<h3>{location.hours.atm}</h3>
					<p>{location.hours.holidayMessage}</p>
				</div>
			</Container>
		</AccountPageWrapper>
	);
}
