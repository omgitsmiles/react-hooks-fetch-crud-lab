import React from "react";

function QuestionItem({ question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;



  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(deleteQ) {
    const deletedQ = questions.filter(question => question !== deleteQ)
    setQuestions(deletedQ)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
  }

  function handlePatch(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({correctIndex: e.target.value})
    })
    .then(r => r.json())
    .then(data =>  {
      const patchedQ = questions.map(q => {
      return q.id === id ? data : q
     })
      setQuestions(patchedQ)
      console.log(patchedQ)
    }
   )
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handlePatch}>{options}</select>
      </label>
      <button onClick={() => handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
