import { connect } from "react-redux";
import { Fragment, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import { setAuthUser } from "../actions/authUser";

import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Nav from "./Nav";
import Home from "./Home";
import NewPoll from "./NewPoll";
import LeaderBroad from "./LeaderBroad";
import PollContent from "./PollContent";
import PageNotFound from "./PageNotFound";

import "../styles/Main.css";
import "antd/dist/antd.css";

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
              <Route
                path='/home'
                element={
                  <PrivateRoute
                    Component={Home}
                    isAuthenticated={authUser !== null}
                  />
                }
              />
              <Route
                path='/add'
                element={
                  <PrivateRoute
                    Component={NewPoll}
                    isAuthenticated={authUser !== null}
                  />
                }
              />
              <Route
                path='/leaderboard'
                element={
                  <PrivateRoute
                    Component={LeaderBroad}
                    isAuthenticated={authUser !== null}
                  />
                }
              />
              <Route
                path='/questions/:id'
                element={
                  <PrivateRoute
                    Component={PollContent}
                    isAuthenticated={authUser !== null}
                  />
                }
              />
              <Route path='/*' element={<PageNotFound />} />
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
