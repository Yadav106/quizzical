import React from "react";

export default function Answers(props) {

    

    function handleToggle(event) {
        props.selectAnswer(props.questionId, event.target.textContent)
    }

    const styles = {
        backgroundColor: props.selected === props.option ? "antiquewhite" : "#261969",
        color: props.selected === props.option ? "#261969" : "",
        border: props.selected === props.option ? "3px solid black" : ""
    }

    let stylesabc = {}

    function setStyles() {
        if(props.isFinished && (props.selected === props.option) && (props.selected === props.correctAns)) {
            stylesabc = {backgroundColor: "green",
            color: "white"}
        }
        if(props.isFinished && (props.selected !== props.correctAns) && (props.selected === props.option)){
            stylesabc = {backgroundColor: "red",
            color: "white"}
        }
        if(!props.isFinished && (props.selected === props.option)){
            stylesabc={backgroundColor: props.selected === props.option ? "antiquewhite" : "#261969",
            color: props.selected === props.option ? "#261969" : "",
            border: props.selected === props.option ? "3px solid black" : ""}
        }
        if(props.isFinished && (props.option === props.correctAns)) {
            stylesabc = {backgroundColor: "green",
            color: "white"}
        }
    }

    setStyles()

    return (
        <div>
            <button style={stylesabc} className="answers--option" onClick={handleToggle}>{props.option}</button>
        </div>
    )
}