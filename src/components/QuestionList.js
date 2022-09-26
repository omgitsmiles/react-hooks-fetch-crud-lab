import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setQuestions }) {

  const renderQuestions = questions.map(question => (
    <QuestionItem key={question.id} question={question} questions={questions} setQuestions={setQuestions}/>
  ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderQuestions}</ul>
    </section>
  );
}

export default QuestionList;

//renderQs from questions array prop passed from App
//Map each componenet with key and singular question 
