import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import quiz from "./quiz";
import {nanoid} from "nanoid"
import QuizStart from "./QuizStart";
import QuizPage from "./QuizPage";
import { decode } from "html-entities";

export default function App() {

    const [start, setStart] = useState(false)
    const [quizData, setQuizData] = useState(quiz.results)

    const url = "https://opentdb.com/api.php?amount=5"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => (setQuizData(data.results)))
            .then(() => {
                setQuizData(prevData => {
                    let dataArray = new Array(prevData.length)
                    for (let i = 0; i < prevData.length; i++){
                        let correctAns = prevData[i].correct_answer
                        let incorrectAns = []
                        for (let j = 0; j < prevData[i].incorrect_answers.length; j++) {
                            incorrectAns.push(prevData[i].incorrect_answers[j])
                        }
                        let answersArr = [correctAns, ...incorrectAns]
                        dataArray[i] = {
                            key: nanoid(),
                            id: nanoid(),
                            question: decode(prevData[i].question),
                            correctAns: decode(prevData[i].correct_answer),
                            selected: undefined,
                            answers: answersArr.sort((a, b) => Math.random() - 0.5)
                        }
                    }
                    return dataArray
                })
            })
    }, [start])

    return (
        <main>
            {start ? <QuizPage quizData={quizData} setStart={setStart} setQuizData={setQuizData}/> : <QuizStart handleStart={() => setStart(true)}/>}
        </main>
    )
}