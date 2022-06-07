import { Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { setAuthUser } from "../actions/authUser";
import "../styles/Nav.css";

class Nav extends Component {
  handleOnClick = () => {
    const { setAuthUser } = this.props;
    setAuthUser(null);
  };

  render() {
    const { authUser } = this.props;

    return (
      <div className='topnav'>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/add'>Create new Poll</NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard'>LeaderBroad</NavLink>
          </li>
        </ul>

        <h4 className='loginUser'>Current login user: {authUser}</h4>
        <Button danger onClick={this.handleOnClick}>
          Logout
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps, { setAuthUser })(Nav);
