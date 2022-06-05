import React from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

const generateDropdownData = (users) => {
	return users.map((user) => ({
		key: user.id,
		label: user.name,
		// icon: user.avatarURL,
	}));
};

const LoginDropdown = (props) => {
	const { users } = props;
	return (
		<Dropdown overlay={<Menu items={generateDropdownData(users)} />}>
			{/* <a onClick={(e) => e.preventDefault()}> */}
			<Space>
				<h2>Choose your superhero</h2>
				<DownOutlined />
			</Space>
			{/* </a> */}
		</Dropdown>
	);
};

function mapStateToProps({ users }) {
	return {
		users: Object.values(users),
	};
}

export default connect(mapStateToProps, { setAuthUser })(LoginDropdown);
