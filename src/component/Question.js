import Option from "./Option";
import React from "react";
function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default React.memo(Question);
