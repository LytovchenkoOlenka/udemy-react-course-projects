import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({ questionText, answers, onSelectAnswer }) {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        onTimeout={handleSkipAnswer}
        timeout={15000}
      />
      <h2>{questionText}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
