import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Question({ Ques, setResult, setQuestionIndex }) {
  const { question, options, answer } = Ques;
  const [selectedOption, setSelectedOption] = useState(null);
  const [timerKey, setTimerKey] = useState(0);

  const handleSubmit = () => {
    if (selectedOption === options.indexOf(answer)) {
      setResult((prevResult) => prevResult + 1);
    }
    setSelectedOption(null);
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <CountdownCircleTimer
          className={"timerClass"}
          size={80}
          isPlaying
          duration={30}
          key={timerKey}
          colors={["#a99db6", "#9685af", "#7954d8", "#2d0375"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => {
            handleSubmit();
          }}
        />
      </div>
      <div className="questionDiv">
        <p className="questionStyles">{question}</p>
        <div className="optionsDiv">
          {options.map((option, index) => (
            <button
              className="optionsbutton"
              key={`${index}-option`}
              onClick={() => setSelectedOption(index)}
              style={
                index === selectedOption ? { backgroundColor: "black" } : {}
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="submitButton"
        onClick={handleSubmit}
        disabled={selectedOption === null}
      >
        Submit
      </button>
    </div>
  );
}
