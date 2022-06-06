import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row, Col, Image, Radio, Button } from "antd";

import { handleSaveQuestionAnswer } from "../actions/users";
import { useNavigate } from "react-router";

export const PollQuestion = (props) => {
  const { authorImg, question, authUser, handleSaveQuestionAnswer } = props;
  const [value, setValue] = useState("optionOne");
  let navigate = useNavigate();
  // const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  async function handleOnClick() {
    await handleSaveQuestionAnswer(authUser, question.id, value);
    navigate("/home");
    // setIsSubmit(true);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => console.log("Initial timeout!"), 1000);
  //   return () => clearTimeout(timer);
  // }, [isSubmit]);

  return (
    <div>
      <Row justify='center'>
        <Col align='middle' justify='center' span={8}>
          <h2>{`${question.author} asks:`}</h2>
          <Image width={150} src={authorImg} preview={false} />
          <h2>Would you rather</h2>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"optionOne"}>{question.optionOne.text}</Radio>
            <Radio value={"optionTwo"}>{question.optionTwo.text}</Radio>
          </Radio.Group>
          <br />
          <Button type='primary' onClick={handleOnClick}>
            Submit Answer
          </Button>
        </Col>
      </Row>
    </div>
  );
};

function mapStateToProps({ questions, users, authUser }, { id }) {
  let question = questions[id];
  let authorImg = users[question.author].avatarURL;

  return { authorImg, question, authUser };
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  PollQuestion
);
