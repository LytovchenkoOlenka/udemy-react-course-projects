import { useState, useEffect } from "react";

import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [usersAnswers, setUsersAnswers] = useState([]);

  const activeQuestionIndex = usersAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUsersAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    const correctAnswersCount = usersAnswers.filter(
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

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          onTimeout={() => handleSelectAnswer(null)}
          timeout={15000}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
