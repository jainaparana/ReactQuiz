import React from "react";
function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
      Next
    </button>
  );
}

export default React.memo(NextButton);
