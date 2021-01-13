import React from "react";
import { AccountPageWrapper } from "../components/styles";
import styled from "styled-components";
import { CardSection } from "../components/styles";
import SideCard from "../components/SideCard";
import { cards } from "../utils/data";
import online from "../media/online.png";
import lend from "../media/lend.png";


const Header = styled.h2`
	padding: 2rem 1rem;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 1.3rem;
`;
const Paragraph = styled.p`
	padding: 0.5rem 1rem;
	color: grey;
	line-height: 16pt;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 3rem auto;
	width: 90%;
	margin: 0 auto;
	label {
		font-weight: 300;
		color: #6d6e71;
		letter-spacing: 0.8pt;
	}
	input,
	select {
		margin: 0.2rem 0 1.5rem 0;
		width: 100%;
		display: block;
		width: 100%;
		height: 2.5rem;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.42857;
		color: #727070;
		background-color: #fff;
		border: 0.0625rem solid #e3e3e3;
	}
	textarea {
		margin: 0.2rem 0 1.5rem 0;
		width: 100%;
		display: block;
		width: 100%;
		height: 8rem;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.42857;
		color: #727070;
		background-color: #fff;
		border: 0.0625rem solid #e3e3e3;
	}
`;

export default function Contact() {
	return (
		<AccountPageWrapper>
			<Header>Contact Us</Header>
			<Paragraph>
				Private personal and account information such as Account Numbers, Passwords, PINs or Social
				Security Numbers should NOT be sent by e-mail.
			</Paragraph>
			<Paragraph>
				If you have a question about your account or need an immediate response, please call us at
				816-228-2300.
			</Paragraph>

			<Form action="POST" name="contact" data-netlify="true">
				<label for="firstName">First Name</label>
				<input type="text" name="firstName" required />
				<label for="lastName">Last Name</label>
				<input type="text" name="lastName" required />
				<label for="address">Address</label>
				<input type="text" name="address" />
				<label for="city">City</label>
				<input type="text" name="city" />
				<label for="state">State </label>
				<select name="state">
					<option value="AL">Alabama</option>
					<option value="AK">Alaska</option>
					<option value="AZ">Arizona</option>
					<option value="AR">Arkansas</option>
					<option value="CA">California</option>
					<option value="CO">Colorado</option>
					<option value="CT">Connecticut</option>
					<option value="DE">Delaware</option>
					<option value="DC">District Of Columbia</option>
					<option value="FL">Florida</option>
					<option value="GA">Georgia</option>
					<option value="HI">Hawaii</option>
					<option value="ID">Idaho</option>
					<option value="IL">Illinois</option>
					<option value="IN">Indiana</option>
					<option value="IA">Iowa</option>
					<option value="KS">Kansas</option>
					<option value="KY">Kentucky</option>
					<option value="LA">Louisiana</option>
					<option value="ME">Maine</option>
					<option value="MD">Maryland</option>
					<option value="MA">Massachusetts</option>
					<option value="MI">Michigan</option>
					<option value="MN">Minnesota</option>
					<option value="MS">Mississippi</option>
					<option value="MO">Missouri</option>
					<option value="MT">Montana</option>
					<option value="NE">Nebraska</option>
					<option value="NV">Nevada</option>
					<option value="NH">New Hampshire</option>
					<option value="NJ">New Jersey</option>
					<option value="NM">New Mexico</option>
					<option value="NY">New York</option>
					<option value="NC">North Carolina</option>
					<option value="ND">North Dakota</option>
					<option value="OH">Ohio</option>
					<option value="OK">Oklahoma</option>
					<option value="OR">Oregon</option>
					<option value="PA">Pennsylvania</option>
					<option value="RI">Rhode Island</option>
					<option value="SC">South Carolina</option>
					<option value="SD">South Dakota</option>
					<option value="TN">Tennessee</option>
					<option value="TX">Texas</option>
					<option value="UT">Utah</option>
					<option value="VT">Vermont</option>
					<option value="VA">Virginia</option>
					<option value="WA">Washington</option>
					<option value="WV">West Virginia</option>
					<option value="WI">Wisconsin</option>
					<option value="WY">Wyoming</option>
				</select>
				<label for="zip">Zip Code</label>
				<input type="number" name="zip" />
				<label for="email">Email Address</label>
				<input type="email" name="email" required />
				<label for="phone">Phone Number</label>
				<input type="tel" name="phone" required />
				<label for="message">Message</label>
				<textarea name="message" />
        <button type="submit">Submit</button>
			</Form>

			<div
				style={{
					height: "200px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					outline: "1px solid grey",
					width: "90%",
					margin: "0 auto"
				}}>
				Captcha
			</div>
			<Paragraph>
				Please read the following important e-mail disclosure:
				<br />
				<br />
				The Bank recognizes e-mail as a simple and cost effective method of communication; however,
				requests and inquiries requiring immediate attention should NOT be sent by e-mail. A bank
				representative may not be able to immediately review your e-mail message. E-mail messages
				will not serve as a sufficient method for any requirement imposed on you to provide written
				notice, nor may any e-mail messages be used to place a stop payment on a check, cancel a
				bill payment, request account transfers, or report lost or stolen banking codes, cards or
				checks.
			</Paragraph>
			<CardSection>
				<SideCard image={online} card={cards.online} />
				<SideCard image={lend} card={cards.loan} />
			</CardSection>
		</AccountPageWrapper>
	);
}
