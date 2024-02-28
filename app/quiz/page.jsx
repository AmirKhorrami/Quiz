"use client";
import { useState } from "react";
import { quiz } from "../data";
import { QuizAnswers, QuizButtons, QuizResult } from "./components";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [correctAnswer, setCorrectAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;
  const { answers, correctAnswer } = questions[activeQuestion];

  // useEffect(() => {
  //   getData();
  // }, [result]);

  // function getData() {
  //   setAnswers(questions[activeQuestion].answers);
  //   setCorrectAnswer(questions[activeQuestion].correctAnswer);
  // }

  // async function timeDelay() {
  //   const delay = 1 + Math.floor(Math.random() * 5);
  //   await timeOut(delay * 1000);
  // }
  // function timeOut(delay) {
  //   return new Promise((time) => setTimeout(time, delay));
  // }

  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true answer");
    } else {
      setSelectedAnswer(false);
      console.log("false answer");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      // setCorrectAnswer("");
      // setAnswers([]);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  // throw new Error();
  return (
    <>
      <h1>صفحه آزمون</h1>
      <div>
        {!showResult ? (
          <h2>
            سوال : {activeQuestion + 1} از <span>{questions.length}</span>
          </h2>
        ) : (
          ""
        )}
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {/* {answers.map((item, index) => (
              <li
                key={index}
                onClick={() => onAnswerSelected(item, index)}
                className={
                  selectedAnswerIndex === index ? "li-selected" : "li-hover "
                }
              >
                <Suspense fallback={<Loading count={1} />}>
                  <span>{timeDelay().then(() => item)}</span>
                  <span>{item}</span>
                </Suspense>
              </li>
            ))} */}
            <QuizAnswers
              answers={answers}
              onAnswerSelected={onAnswerSelected}
              selectedAnswerIndex={selectedAnswerIndex}
            />
            <QuizButtons
              checked={checked}
              nextQuestion={nextQuestion}
              activeQuestion={activeQuestion}
              questions={questions}
            />
          </div>
        ) : (
          <QuizResult questions={questions} result={result} />
        )}
      </div>
    </>
  );
};

export default Quiz;
