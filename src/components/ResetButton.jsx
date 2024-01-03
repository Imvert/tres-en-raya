import React from "react";
import "../index.css";

export default function ResetButton({ resetBoard }) {
  return (
    <button className="reset-btn"  onClick={resetBoard}>
      Reiniciar
    </button>
  );
}
