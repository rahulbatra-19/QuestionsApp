import React, { useEffect, useState } from "react";
import axios from "axios";
import { Question, Result, WelcomeScreen } from "./components";
import randomizeArray from "./utils";

export default function App() {
  const [questionData, setQuestionData] = useState([]);
  const [result, setResult] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json");
      const data = randomizeArray(response.data);
      setQuestionData(data);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        height: "full",
        padding: 20,
      }}
    >
      {!startGame ? (
        <WelcomeScreen
          setUserName={setUserName}
          userName={userName}
          setStartGame={setStartGame}
        />
      ) : (
        <>
          {questionIndex < questionData.length ? (
            <>
              <div
                className="progressbar"
                style={{
                  background: "#A99DB6",
                  // width: 300,
                  // height: 40,
                  display: "flex",
                }}
              >
                <div
                  className="progressbar-innerdiv"
                  style={{
                    width: `${questionIndex * 10}%`,
                    backgroundColor: "#2d0375",
                    // height: 40,
                  }}
                />
              </div>
              <Question
                Ques={questionData[questionIndex]}
                setResult={setResult}
                setQuestionIndex={setQuestionIndex}
              />
            </>
          ) : (
            <Result
              result={result}
              length={questionData.length}
              name={userName}
            />
          )}
        </>
      )}
    </div>
  );
}
