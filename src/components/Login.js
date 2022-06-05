import React from "react";
import { Row, Col, Image } from "antd";
import LoginDropdown from "./LoginDropdown";

export default function Login() {
	return (
		<div>
			<Row justify="center">
				<Col align="middle" justify="center" span={8}>
					<h1>Would You Rather</h1>
					<Image width={300} src="images/dog.png" />
					<br />
					<br />
					<LoginDropdown />
				</Col>
			</Row>
		</div>
	);
}
