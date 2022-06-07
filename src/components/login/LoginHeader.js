import React from "react";
import { Header, HeaderContent, HeaderSubheader } from "semantic-ui-react";

export default function LoginHeadername() {
	return (
		<Header as="h4" block attached="top" textAlign="center">
			<HeaderContent>Welcome to the Would You Rather App!</HeaderContent>
			<HeaderSubheader>Choose your superhero</HeaderSubheader>
		</Header>
	);
}
