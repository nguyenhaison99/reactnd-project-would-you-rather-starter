import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";

function App(props) {
  const { handleInitialData } = props;
  const prevAuthUser = localStorage.getItem("authUser");

  useEffect(() => {
    handleInitialData();
  });

  return (
    <div className='App'>
      <Router>
        {prevAuthUser === null ? <Login /> : <div>Hello World</div>}
      </Router>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps, { handleInitialData })(App);
