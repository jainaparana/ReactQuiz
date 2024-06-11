import React from "react";
function Option({ question, dispatch, answer }) {
  function handleClick(index) {
    var point = 0;
    if (index === question.correctOption) {
      point = point + question.points;
    }
    dispatch({ type: "newAnswer", payload: { index, point } });
  }

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={answer !== null}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default React.memo(Option);
