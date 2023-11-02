import React from "react";

export default function Result({ result, length, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <div
        style={{
          marginTop: "15%",
          height: 300,
          width: "fit-content",
          padding: 20,
          backgroundColor: "#9685af",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            backgroundColor: "#9685af",
            textAlign: "center",
          }}
        >
          {name}, You Scored :
        </p>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          {result} Out of {length}
        </p>
      </div>
      <button
        className="questionStyles"
        onClick={() => {
          window.location.reload();
        }}
      >
        Play Again
      </button>
    </div>
  );
}
