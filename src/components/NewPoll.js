import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { Row, Col, Button, Form, Input } from "antd";
import { Navigate } from "react-router";

const NewPoll = (props) => {
  const { authUser, handleSaveQuestion } = props;
  // const [optionOne, setOptionOne] = useState("")
  // const [optionTwo, setOptionTwo] = useState("")
  const [submitSucceded, setSubmitSucceded] = useState(false);

  const onFinish = async (values) => {
    const { optionone, optiontwo } = values;
    await handleSaveQuestion(optionone, optiontwo, authUser);
    setSubmitSucceded(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (submitSucceded === true) return <Navigate to='/home' />;

  return (
    <Fragment>
      <Row justify='center'>
        <Col align='middle' justify='center' span={8}>
          <h2>Would You Rather</h2>
          <Form
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'>
            <Form.Item
              label='optionOne'
              name='optionone'
              rules={[
                {
                  required: true,
                  message: "Please input your optionOne!",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='optionTwo'
              name='optiontwo'
              rules={[
                {
                  required: true,
                  message: "Please input your optionTwo!",
                },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

function mapStateToProps({ authUser }) {
  return { authUser };
}

export default connect(mapStateToProps, { handleSaveQuestion })(NewPoll);
