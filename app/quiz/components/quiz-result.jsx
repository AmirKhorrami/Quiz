import React from "react";
import Link from "next/link";

const QuizResult = ({ result, questions }) => {
  return (
    <div className="quiz-container">
      <h3>نتایج</h3>
      <h3>به طور کلی به {(result.score / 25) * 100}% سوالات پاسخ داده شده</h3>
      <p>کل سوالات: {questions.length}</p>
      <p>کل امتیازات: {result.score}</p>
      <p>سوالات درست: {result.correctAnswers}</p>
      <p>سوالات غلط: {result.wrongAnswers}</p>
      <div className="flex justify-between">
        <button className="w-[40%]" onClick={() => window.location.reload()}>
          شروع مجدد
        </button>
        <Link className="w-[40%]" href="/">
          <button>
            بازگشت به صفجه اصلی
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizResult;
