import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Tabs } from "antd";

import PollTeaser from "./PollTeaser";

const { TabPane } = Tabs;

class Home extends Component {
  render() {
    const { answered, unanswered, users } = this.props;
    return (
      <div>
        <Row justify='center'>
          <Col align='middle' justify='center' span={8}>
            <Tabs type='card' centered size='large'>
              <TabPane tab='Unanswered' key='1'>
                {unanswered.map((question, idx) => {
                  return (
                    <PollTeaser
                      key={idx}
                      question={question}
                      answered={true}
                      userImgUrl={users[question.author].avatarURL}
                    />
                  );
                })}
              </TabPane>
              <TabPane tab='Answered' key='2'>
                {answered.map((question, idx) => {
                  return (
                    <PollTeaser
                      key={idx}
                      question={question}
                      answered={false}
                      userImgUrl={users[question.author].avatarURL}
                    />
                  );
                })}
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ authUser, users, questions }) {
  const authUserAnsweredIds = Object.keys(users[authUser].answers);

  const authUserAnswered = Object.values(questions)
    .filter((question) => authUserAnsweredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const authUserUnanswered = Object.values(questions)
    .filter((question) => !authUserAnsweredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    users,
    answered: authUserAnswered,
    unanswered: authUserUnanswered,
  };
}

export default connect(mapStateToProps)(Home);
