import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import authUser from "./reducers/authUser";
import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <Router>
        <div className='App'>
          {authUser === null ? (
            () => (
              <ContentGrid>
                <Login />
              </ContentGrid>
            )
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                </Routes>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded='vertically' columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps, { handleInitialData })(App);
