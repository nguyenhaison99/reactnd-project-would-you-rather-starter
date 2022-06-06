import React, { useState } from "react";
import { Navigate } from "react-router";
import { Button, Image } from "antd";

const PollTeaser = (props) => {
  const { question, answered, userImgUrl } = props;
  const [viewPoll, setViewPoll] = useState(false);

  if (viewPoll === true) {
    return <Navigate push to={`/questions/${question.id}`} />;
  }

  return (
    <div className={answered ? "user-card-answered" : "user-card-unanswered"}>
      <Image width={150} src={userImgUrl} preview={false} />
      <h4>Would you rather</h4>
      <p
        style={{
          textAlign: "center",
        }}>{`...${question.optionOne.text} OR ...`}</p>
      <Button type='primary' onClick={() => setViewPoll(true)}>
        View Poll
      </Button>
    </div>
  );
};

export default PollTeaser;
