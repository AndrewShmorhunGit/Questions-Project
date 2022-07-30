import React from "react";
import data from "./DataJS";
import Question from "./QuestionJS";

const QuestionsJS = (getAnswer, getAnswerCode) => {
  return (
    <section>
      <h1 className="heading-list-primary">JS Core</h1>
      <ul className="questions-list">
        {data.map((question) => {
          return (
            <Question
              key={question.id}
              {...question}
              getAnswer={getAnswer}
              getAnswerCode={getAnswerCode}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default QuestionsJS;
