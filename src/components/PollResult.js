import React, { Fragment } from "react";
import { Row, Col, Progress, Image, Card } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

export const YourVote = () => {
  return (
    <Fragment>
      <p style={{ color: "red" }}>
        Your vote <CheckCircleOutlined />
      </p>
    </Fragment>
  );
};

const PollResult = (props) => {
  const { authorImg, question, authUser, optionOnePercent, optionTwoPercent } =
    props;

  return (
    <div>
      <Row justify='center'>
        <Col align='left' justify='center' span={8}>
          <h2>{`${question.author} asks:`}</h2>
          <Image width={150} src={authorImg} preview={false} />

          <Card title='Would you rather'>
            {question.optionOne.votes.includes(authUser) && <YourVote />}
            <p>
              {`${question.optionOne.text} (${question.optionOne.votes.length} votes) `}
            </p>
            <Progress
              className='progress-bar'
              strokeWidth='20px'
              percent={optionOnePercent}
              status='active'
            />
            {question.optionTwo.votes.includes(authUser) && <YourVote />}
            <p>
              {`${question.optionTwo.text} (${question.optionTwo.votes.length} votes)`}
            </p>
            <Progress
              className='progress-bar'
              strokeWidth='20px'
              percent={optionTwoPercent}
              status='active'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps({ questions, users, authUser }, { id }) {
  let question = questions[id];
  if (!question) return {};

  let authorImg = users[question.author].avatarURL;
  let totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  let optionOnePercent = (question.optionOne.votes.length * 100) / totalVotes;
  let optionTwoPercent = (question.optionTwo.votes.length * 100) / totalVotes;
  return { authorImg, question, authUser, optionOnePercent, optionTwoPercent };
}

export default connect(mapStateToProps)(PollResult);
