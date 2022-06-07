import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Image } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const LeaderBroad = (props) => {
  const { leaderboardData } = props;

  return (
    <Row justify='center'>
      <Col align='middle' justify='center' span={6}>
        {leaderboardData.map((user) => {
          return (
            <Card
              title={user.name}
              key={user.id}
              style={{
                width: 300,
                marginTop: "10px",
              }}
              cover={
                <Image
                  alt='example'
                  src={user.avatarURL}
                  width={200}
                  preview={false}
                />
              }>
              <Meta
                title={`Total: ${user.total}`}
                description={`Asked: ${user.questionCount}, Answered: ${user.answerCount}`}
              />
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};

function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse();

  return {
    leaderboardData,
  };
}

export default connect(mapStateToProps)(LeaderBroad);
