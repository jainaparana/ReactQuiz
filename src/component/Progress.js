import React from "react";
function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>
        {points}/{totalPoints}
      </p>
    </header>
  );
}

export default React.memo(Progress);
