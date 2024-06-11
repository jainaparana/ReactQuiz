import React from "react";
function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  let percentage = Math.ceil((points / totalPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage === 0) emoji = "🤦‍♀️";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "🙂";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Start Again
      </button>
    </>
  );
}

export default React.memo(FinishScreen);
