import React from "react";

export default function WelcomeScreen({ setUserName, userName, setStartGame }) {
  return (
    <div
      style={{
        height: "100%",
        textAlign: "center",
        marginTop: "15%",
      }}
    >
      <h1>Quiz Game</h1>
      <input
        type="text"
        placeholder="John Doe"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          userName.length > 0
            ? setStartGame(true)
            : alert("Please Enter your name!!");
        }}
      >
        Start
      </button>
      <h3 style={{ color: "grey" }}>
        ***Once you start you can not pause the game
      </h3>
    </div>
  );
}
