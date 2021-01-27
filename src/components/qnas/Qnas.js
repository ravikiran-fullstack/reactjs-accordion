import React from "react";

import Qna from "./qna/Qna";

import questions from "../../data";

const Qnas = () => {
  return (
    <>
      {questions.map((question) => {
        return <Qna key={question.id} {...question}></Qna>;
      })}
    </>
  );
};

export default Qnas;
