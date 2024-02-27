"use client";
import { useState, useEffect, Suspense } from "react";
import { quiz } from "../data";
import Loading from "./loading";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;

  useEffect(() => {
    getData();
  }, [result]);

  function getData() {
    setAnswers(questions[activeQuestion].answers);
    setCorrectAnswer(questions[activeQuestion].correctAnswer);
  }

  async function timeDelay() {
    const delay = 1 + Math.floor(Math.random() * 5);
    await timeOut(delay * 1000);
  }
  function timeOut(delay) {
    return new Promise((time) => setTimeout(time, delay));
  }

  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
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
      setCorrectAnswer("");
      setAnswers([]);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container">
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
                </Suspense>
              </li>
            ))} */}
            {answers.length > 0 ? (
              answers.map((item, index) => (
                <li
                  key={index}
                  onClick={() => onAnswerSelected(item, index)}
                  className={
                    selectedAnswerIndex === index ? "li-selected" : "li-hover "
                  }
                >
                  <span>{item}</span>
                </li>
              ))
            ) : (
              <Loading count={4} />
            )}

            {checked ? (
              <button className="btn" onClick={nextQuestion}>
                {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
              </button>
            ) : (
              <button className="btn-disabled" onClick={nextQuestion} disabled>
                {activeQuestion === questions.length - 1 ? "پایان" : "بعدی"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>نتایج</h3>
            <h3>
              به طور کلی به {(result.score / 25) * 100}% سوالات پاسخ داده شده
            </h3>
            <p>کل سوالات: {questions.length}</p>
            <p>کل امتیازات: {result.score}</p>
            <p>سوالات درست: {result.correctAnswers}</p>
            <p>سوالات غلط: {result.wrongAnswers}</p>
            <button onClick={() => window.location.reload()}>شروع مجدد</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
