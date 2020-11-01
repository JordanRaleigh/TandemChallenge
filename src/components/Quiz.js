import React, { useState, useEffect } from 'react';
import questions from '../data/Apprentice_TandemFor400_Data.json';
import  '../Quiz.css'

const Quiz = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [questionBank, setQuestionBank] =  useState([])
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false)
  const [checkAnswer, setCheckAnswer] = useState('')

  useEffect(() => {
   setQuestionBank(questions.sort(() => 0.5 - Math.random()).slice(0, 10))
  }, [])

  const handleClick = (option) => {
    if (option === questionBank[count].correct) {
      setScore(score + 1);
      setCheckAnswer('correct')
      setShowAnswer(true)
    } else {
      setCheckAnswer('incorrect')
      setShowAnswer(true)
    }
  };

  const nextQuestion = () => {
    if (count < questionBank.length - 1) {
      setCount(count + 1);
      setShowAnswer(false)
    } else {
      setShowFinalScore(true);
    }
  }

  if(!questionBank.length){
    return null
  }
  return (
    <div className='quiz'>
      {showFinalScore ? (
        <h1 className='score'> Final Score: {score} out of {questionBank.length}!</h1>
      ) :  (
        <>
          <div className='question-progress'>
            <h1>Question</h1>
              <h2>{count + 1}/{questionBank.length}</h2>
          </div>
          <h2 className='question'>{questionBank[count].question}</h2>
          <div className='answers'>
            {questionBank[count].incorrect
              .concat(questionBank[count].correct)
              .sort()
              .map((option) => (
                <li key={option}>
                  <button className='button' onClick={() => handleClick(option)}>{option}</button>
                </li>
              ))}
              {showAnswer && checkAnswer === 'incorrect' ? (
                <div>
                <h2 className='incorrect-result'>Wrong! The correct answer is {questionBank[count].correct}</h2>
                <button className='next-button' onClick={() => nextQuestion()}>Next Question</button>
                </div>
               ) : showAnswer && checkAnswer === 'correct' ? (
                <div>
                  <h2 className='correct-result'>{questionBank[count].correct} is correct!</h2>
                  <button className='next-button' onClick={() => nextQuestion()}>Next Question</button>
                  </div>
                ) : (
                  <>   </>
                )
              }
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
