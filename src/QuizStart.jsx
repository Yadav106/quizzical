import React from "react";

export default function QuizStart(props) {
    return (
        <div className="start-quiz">
            <h1>Quizzical</h1>
            <button className="start-button" onClick={props.handleStart}>Start Quiz</button>
        </div>
    )
}