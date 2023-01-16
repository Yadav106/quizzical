import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";

export default function QuizPage(props) {

    const [score, setScore] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    function selectAnswer(id, option) {
        props.setQuizData(prevData => {
            const newData = prevData.map(data => {
                if(id === data.id){
                    return ({...data, selected: option})
                } else {
                    return data
                }
            })
            return newData
        })
    }

    function endCheckAns() {
        props.quizData.forEach(data => {
            if (data.selected === data.correctAns){
                setScore(prev => prev+1)
            }
        })
    }

    useEffect(() => {
        endCheckAns()
    }, [isFinished])

    const quizElements = props.quizData.map((data) => 
        <Question 
            key={data.key} 
            question={data.question}
            answers={data.answers}
            correctAns={data.correctAns}
            questionId={data.id}
            selected={data.selected}
            selectAnswer={selectAnswer}
            isFinished={isFinished}
        />
    )

    return(
        <div className="quizpage">
            {quizElements}
            {
                !isFinished
                ?
                <button className="checkans" onClick={() => setIsFinished(true)}>Check Answers</button>
                :
                <>
                    <h2>Your score is : {score}/5</h2>
                    <button type="submit" className="playagain" onClick={() => props.setStart(false)}>Play Again</button>
                </>
            }
        </div>
    )
}