import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Image, Button, Container } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

class Nav extends Component {
	handleLogout = (e) => {
		e.preventDefault();
		this.props.setAuthUser(null);
	};

	render() {
		const { authUser, users } = this.props;
		return (
			authUser && (
				<Container>
					<Menu>
						<Menu.Item name="home" as={NavLink} to="/" />
						<Menu.Item name="new poll" as={NavLink} to="/addpoll" />
						<Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
						<Menu.Menu position="right">
							<Menu.Item>
								<span>
									<Image
										src={users[authUser].avatarURL}
										avatar
										spaced="right"
										verticalAlign="bottom"
									/>
									{users[authUser].name}
								</span>
							</Menu.Item>
							<Menu.Item>
								<Button
									content="Logout"
									labelPosition="right"
									icon="log out"
									size="mini"
									basic
									compact
									onClick={this.handleLogout}
								/>
							</Menu.Item>
						</Menu.Menu>
					</Menu>
				</Container>
			)
		);
	}
}

function mapStateToProps({ users, authUser }) {
	return {
		authUser,
		users,
	};
}

export default connect(mapStateToProps, { setAuthUser })(Nav);
