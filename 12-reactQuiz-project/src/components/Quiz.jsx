import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    const correctAnswersCount = userAnswers.filter(
      (answer, index) => answer === QUESTIONS[index].answers[0]
    ).length;

    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz completed!</h2>
        <p>
          You answered {correctAnswersCount} out of {QUESTIONS.length} questions
          correctly!
        </p>
        {/* 
        <button onClick={() => setUsersAnswers([])}>Restart Quiz</button> */}
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        questionIndex={activeQuestionIndex}
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
