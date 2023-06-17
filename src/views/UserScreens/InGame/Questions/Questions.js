import React, { useState, useEffect } from 'react';
import Question from "./Question/Question";
import { BIO } from "../../../../consts/mid";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestionIndex < BIO.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestionIndex]);

  const currentQuestion = BIO[currentQuestionIndex];

  return (
    <div style={{ marginTop: '100px' }}>
      {currentQuestion && (
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
        />
      )}
    </div>
  );
};

export default Questions;