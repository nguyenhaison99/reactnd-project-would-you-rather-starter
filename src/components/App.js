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
    const { handleInitialData, setAuthUser } = this.props;
    handleInitialData().then(() => {
      // const prevAuthUser = JSON.parse(localStorage.getItem("authUser"));
      // if (prevAuthUser !== null) {
      //   this.setState({ prevAuthUser });
      //   setAuthUser(prevAuthUser);
      // }
    });
  }

  render() {
    const { authUser } = this.props;

    if (authUser === null) {
      return (
        <div className='App'>
          <Router>
            <Fragment>
              <Routes>
                <Route path='/*' element={<Login />} />
              </Routes>
            </Fragment>
          </Router>
        </div>
      );
    }

    return (
      <div className='App'>
        <Router>
          <Fragment>
            {authUser !== null && <Nav />}
            <Routes>
              <Route exact path='/login' element={<Login />} />
              <Route
                exact
                path='/home'
                element={
                  <Home />
                  // <PrivateRoute
                  //   Component={Home}
                  //   isAuthenticated={authUser !== null}
                  // />
                }
              />
              <Route
                exact
                path='/add'
                element={
                  <NewPoll />
                  // <PrivateRoute
                  //   Component={NewPoll}
                  //   isAuthenticated={authUser !== null}
                  // />
                }
              />
              <Route
                exact
                path='/leaderboard'
                element={
                  <LeaderBroad />
                  // <PrivateRoute
                  //   Component={LeaderBroad}
                  //   isAuthenticated={authUser !== null}
                  // />
                }
              />
              <Route
                exact
                path='/questions/:id'
                element={
                  <PollContent />
                  // <PrivateRoute
                  //   Component={PollContent}
                  //   isAuthenticated={authUser !== null}
                  // />
                }
              />
              <Route path='*' element={<PageNotFound />} />
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
