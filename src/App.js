import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import "./App.css";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <ContentGrid>
            <p>Hello World</p>
          </ContentGrid>
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

export default connect(null, { handleInitialData })(App);
