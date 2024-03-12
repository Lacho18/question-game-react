import { useState, useRef } from "react";
import "./QuestionStructure.css";

export default function QuestionStructure(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [finished, setFinished] = useState(false);
    const [textAnswer, setTextAnswer] = useState("");
    const correctAnswersRef = useRef(0);

    function selectAnswerHandler(answer) {
        if (props.questions[currentQuestion].correct === answer + 1) {
            correctAnswersRef.current++;
        }

        if (currentQuestion + 1 < props.questions.length) {
            setCurrentQuestion(prevQuestion => prevQuestion + 1);
        }
        else {
            //End of questions situation
            setFinished(true);
            console.log(correctAnswersRef);
        }
    }

    function textAnswerHandler(e) {
        setTextAnswer(e.target.value);
    }

    function submitTextAnswer() {
        if (textAnswer !== "") {
            if (props.questions[currentQuestion].answer) {
                if (textAnswer.toLowerCase().includes(props.questions[currentQuestion].answer.toLowerCase())) {
                    correctAnswersRef.current++;
                }
            }
            let textAnswerInput = document.getElementById("textAnswerInput");
            textAnswerInput.value = "";

            if (currentQuestion + 1 < props.questions.length) {
                setCurrentQuestion(prevQuestion => prevQuestion + 1);
                setTextAnswer("");
            }
            else {
                //End of questions situation
                setFinished(true);
                console.log(correctAnswersRef);
            }
        }
        else {
            alert("Enter text in the input field!");
        }
    }

    function newGameHandler() {
        props.nullTheme();
    }

    function EndGame() {
        let mainBox = document.getElementsByClassName('main-box');
        mainBox[0].remove();

        let h1 = document.createElement("h1");
        h1.innerHTML = "Thanks for playing!";
        document.body.appendChild(h1);
    }

    if (!finished) {
        return (
            <div>
                <p className="question-text" style={props.questions[currentQuestion].image && { marginTop: "1px" }}>{props.questions[currentQuestion].question}</p>
                {props.questions[currentQuestion].image && <img id="imageOnQuestion" src={props.questions[currentQuestion].image} />}
                {props.questions[currentQuestion].type === "closed" ?
                    <div className="answers-buttons">
                        {props.questions[currentQuestion].answers.map((answer, index) => {
                            return <button key={index} onClick={() => { selectAnswerHandler(index); }}>{answer}</button>
                        })}
                    </div>
                    :
                    <div className="answers-input">
                        <input id="textAnswerInput" type="text" onChange={textAnswerHandler} />
                        <button id="submitTextAnswer" onClick={submitTextAnswer}>Потвърди</button>
                    </div>
                }

                <p id="questionCounter">{currentQuestion + 1}/{props.questions.length}</p>
            </div>
        );
    }
    else {
        return (
            <div className="finish-window">
                <p>Your score is : <span>{correctAnswersRef.current}</span></p>
                <div className="finish-buttons-div">
                    <p>Do you want to play again?</p>
                    <button style={{ backgroundColor: "green" }} onClick={newGameHandler}>Yes</button>
                    <button style={{ backgroundColor: "red" }} onClick={EndGame}>No</button>
                </div>
            </div>
        );
    }
}