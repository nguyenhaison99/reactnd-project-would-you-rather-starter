import React, { Component } from "react";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { Navigate } from "react-router";

class LoginDropdown extends Component {
  state = {
    loginSucceded: false,
  };

  generateDropdownData = (users) => {
    return users.map((user) => ({
      key: user.id,
      label: user.name,
    }));
  };

  handleOnClick = (e) => {
    const { setAuthUser } = this.props;
    setAuthUser(e.key);
    this.setState({ loginSucceded: !this.state.loginSucceded });

    // localStorage.setItem("authUser", JSON.stringify(e.key));
  };

  render() {
    console.log(this.state.loginSucceded);
    if (this.state.loginSucceded === true) {
      return <Navigate to='/home' />;
    }

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
