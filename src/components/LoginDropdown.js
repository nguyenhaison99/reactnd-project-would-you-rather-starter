import React, { Component } from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

class LoginDropdown extends Component {
  generateDropdownData = (users) => {
    return users.map((user) => ({
      key: user.id,
      label: user.name,
    }));
  };

  handleOnClick = (e) => {
    const { setAuthUser } = this.props;
    setAuthUser(e.key);
    localStorage.setItem("authUser", e.key);
  };

  render() {
    const { users } = this.props;
    return (
      <Dropdown
        overlay={
          <Menu
            onClick={this.handleOnClick}
            items={this.generateDropdownData(users)}
          />
        }>
        {/* <a onClick={(e) => e.preventDefault()}> */}
        <Space>
          <h2>Choose your superhero</h2>
          <DownOutlined />
        </Space>
        {/* </a> */}
      </Dropdown>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps, { setAuthUser })(LoginDropdown);
