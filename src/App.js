import React, { useState, useEffect } from "react";
import QuestionsJS from "./QuestionsJS";

import NavJS from "./NavJS";

function App() {
  const [questions, setQuestion] = useState([]);
  return (
    <>
      <NavJS />
      <div className="container">
        <QuestionsJS
          questions={questions}
          {...questions}
          setQuestion={setQuestion}
        />
      </div>
    </>
  );
}

export default App;
