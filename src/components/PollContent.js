import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import PollQuestion from "./PollQuestion";

const PollContent = (props) => {
  const { id } = useParams();
  const { questions, users, authUser } = props;

  if (!Object.keys(questions).includes(id)) {
    return <div>404 Question NOT FOUND</div>;
  }

  // Logic to render PollQuestion or PollResult
  let loginUser = users[authUser];

  if (Object.keys(loginUser.answers).includes(id)) {
    return <div>Answered Question</div>;
  }

  return <PollQuestion id={id} />;
};

function mapStateToProps({ questions, users, authUser }) {
  return { questions, users, authUser };
}

export default connect(mapStateToProps)(PollContent);
