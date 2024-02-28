import Loading from "../loading";

const QuizAnswers = ({
  answers,
  onAnswerSelected,
  selectedAnswerIndex
}) => {
  return answers.length > 0 ? (
    answers.map((item, index) => (
      <li
        key={index}
        onClick={() => onAnswerSelected(item, index)}
        className={selectedAnswerIndex === index ? "li-selected" : "li-hover "}
      >
        <span>{item}</span>
      </li>
    ))
  ) : (
    <Loading count={4} />
  );
};

export default QuizAnswers;
