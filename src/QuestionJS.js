import React, { useState } from "react";
import myImg1 from "./img/mdn-logo.png";
import myImg2 from "./img/Wiki-logo.png";
import data from "./DataJS";

const QuestionJS = ({
  id,
  level,
  number,
  question,
  questionCode,
  answerQuestion,
  answerCode,
  answerLinks,
}) => {
  const [answer, setAnswer] = useState(false);

  const getAnswer = answerQuestion.map((el, index) => {
    return (
      <li key={index} className="answer-text">
        {el}
      </li>
    );
  });

  const getAnswerCode = () => {
    answerCode.map((el, index) => {
      return (
        <p key={index} className="code-text">
          {el}
        </p>
      );
    });
  };

  const getQuestionCode = () => {
    questionCode.map((el, index) => {
      return (
        <p key={index} className="code-text">
          {el}
        </p>
      );
    });
  };

  const getAnswerLink = () => {
    return (
      <div className="answer-links">
        <a
          className="link-img-container"
          href={answerLinks[0]}
          alt="MDN logo"
          target="_blank"
        >
          <img className="links-img" src={myImg1} />
        </a>
        {/* <a
          className="link-img-container"
          href={answerLinks[1]}
          alt="Wikipedia logo"
          target="_blank"
        >
          <img className="links-img-wiki" src={myImg2} />
        </a> */}
      </div>
    );
  };

  return (
    <div className="container">
      <li className="question-in-list">
        <button
          className={
            answer ? "answer-number-in-list" : "question-number-in-list"
          }
          onClick={() => {
            setAnswer(!answer);
          }}
        >
          {number}
        </button>
        <p className="question-text-in-list">{question}</p>
      </li>
      <div className={questionCode.length === 0 || "code"}>
        {getQuestionCode}
      </div>

      <div
        className={answer ? "show-answer-container" : "answer-container"}
        key={id}
      >
        <div className="level-container">
          <p className="level">{level}</p>
        </div>
        <div className="answer-text">{getAnswer}</div>

        <div className={answer && "code"}>{() => getAnswerCode()}</div>
        {getAnswerLink()}
      </div>
    </div>
  );
};

export default QuestionJS;
