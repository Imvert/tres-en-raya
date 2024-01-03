import React from "react";
import "../index.css";

const ScoreBoard = ({ Scores, xPlaying }) => {
  const { xScore, oScore } = Scores;
  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
