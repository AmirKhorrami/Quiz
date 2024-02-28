import React from 'react';

const QuizResult = ({ result, questions }) => {
  return (
    <div className="quiz-container">
      <h3>نتایج</h3>
      <h3>به طور کلی به {(result.score / 25) * 100}% سوالات پاسخ داده شده</h3>
      <p>کل سوالات: {questions.length}</p>
      <p>کل امتیازات: {result.score}</p>
      <p>سوالات درست: {result.correctAnswers}</p>
      <p>سوالات غلط: {result.wrongAnswers}</p>
      <button onClick={() => window.location.reload()}>شروع مجدد</button>
    </div>
  );
};

export default QuizResult;