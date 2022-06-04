import React, { Component, Fragment } from "react";
import { SegmentGroup } from "semantic-ui-react";
import LoginHeader from "./LoginHeader";
import LoginGridLayout from "./LoginGridLayout";
import LoginForm from "./LoginForm";
import BrandImage from "./BrandImage";

export default class Login extends Component {
	state = {
		loading: false,
	};

	handleLoading = () => this.setState({ loading: true });

	render() {
		return (
			<Fragment>
				<SegmentGroup>
					<LoginHeader />
					<LoginGridLayout
						image={<BrandImage />}
						form={<LoginForm onLoading={this.handleLoading} />}
						loading={this.state.loading}
					/>
				</SegmentGroup>
			</Fragment>
		);
	}
}
