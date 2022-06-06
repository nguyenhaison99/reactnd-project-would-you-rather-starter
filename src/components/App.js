import { connect } from "react-redux";
import { Fragment, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import { setAuthUser } from "../actions/authUser";

import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import NewPoll from "./NewPoll";
import LeaderBroad from "./LeaderBroad";
import "../styles/Main.css";
import "antd/dist/antd.css";
import PollContent from "./PollContent";

class App extends Component {
  // state = {
  //   prevAuthUser: null,
  // };

  componentDidMount() {
    const { handleInitialData } = this.props;
    // const prevAuthUser = localStorage.getItem("authUser");
    handleInitialData();
    // if (prevAuthUser !== null) {
    //   this.setState({ prevAuthUser });
    //   setAuthUser(prevAuthUser);
    // }
  }

  render() {
    const { authUser } = this.props;

    return (
      <div className='App'>
        <Router>
          <Fragment>
            {authUser !== null && <Nav />}

            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/addpoll' element={<NewPoll />} />
              <Route path='/leaderboard' element={<LeaderBroad />} />
              <Route path='/questions/:id' element={<PollContent />} />
            </Routes>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps, { handleInitialData, setAuthUser })(
  App
);
