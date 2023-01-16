import React from "react";
import Answers from "./Answers";
import { decode } from "html-entities";

export default function Question(props) {
    const choices = props.answers.map((option, index) => {
        return <Answers 
            key={index} 
            id={index} 
            option={decode(option)}
            questionId={props.questionId} 
            selectAnswer={props.selectAnswer}
            selected={props.selected}
            isFinished={props.isFinished}
            correctAns={props.correctAns}
        />
    })

    return (
        <div>
            <h1>{props.question}</h1>
            <div className="question--choices">{choices}</div>
        </div>
    )
}