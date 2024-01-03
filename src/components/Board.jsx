import React from "react";
import Box from "./Box";
import "../index.css";
import uniqid from "uniqid";

export default function Board({ board, onClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box
            value={value}
            key={uniqid()}
            onClick={() => value === null && onClick(idx)}
          ></Box>
        );
      })}
    </div>
  );
}
