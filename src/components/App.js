import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(setQuestions)
  }, [])

  function addNewQ(newQ) {
    setQuestions([...questions, newQ])
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQ={addNewQ}/> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;


//useEffect to fetch the questions from DB

//pass qArray to questionlist comp


//qForm to be submitted using post req


//write function in App to update qArray with new question on submit