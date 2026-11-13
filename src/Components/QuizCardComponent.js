import { useEffect, useState } from "react";

import "../Styles/quizcardStyle.css";

import QUESTIONS from "../data/questions.json";

export default function QuizCardComponent({ showResult, resultScore }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [seconds, setSeconds] = useState(30);

    function optionClickHandler(optionIndex, correctIndex, event) {
        event.target.style.backgroundColor =
            optionIndex === correctIndex ? "lightgreen" : "red";

        optionIndex === correctIndex && setScore((prevScore) => prevScore + 1);

        // fix this (this bypasses react) solution: use selected option state
        const buttons = document.querySelectorAll(".options-btn");

        if (optionIndex !== correctIndex) {
            buttons[correctIndex].style.backgroundColor = "lightgreen";
        }

        buttons.forEach((btn) => {
            btn.disabled = true;
        });
    }

    useEffect(() => {
        let count = 30;
        setSeconds(count);

        let timer = setInterval(() => {
            count--;
            setSeconds(() => count);
            if (count === 0) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestion]);

    useEffect(() => {
        if (seconds !== 0) return;
        if (QUESTIONS.questions.length - 1 === currentQuestion) {
            showResult(true);
            resultScore(score);
        } else {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setSeconds(30);
        }
    }, [seconds, currentQuestion, resultScore, score, showResult]);

    return (
        <div className="quiz-card">
            <div key={QUESTIONS.questions[currentQuestion].id}>
                <h3>{QUESTIONS.questions[currentQuestion].question}</h3>
                <p>Timer: {seconds}</p>

                <ul>
                    {QUESTIONS.questions[currentQuestion].options.map(
                        (option, index) => {
                            return (
                                <li key={index}>
                                    <button
                                        className="options-btn"
                                        onClick={(event) =>
                                            optionClickHandler(
                                                index,
                                                QUESTIONS.questions[
                                                    currentQuestion
                                                ].correctIndex,
                                                event,
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                </li>
                            );
                        },
                    )}
                </ul>
            </div>

            {QUESTIONS.questions.length - 1 === currentQuestion ? (
                <button
                    onClick={() => {
                        showResult(true);
                        resultScore(score);
                    }}
                >
                    Show Result
                </button>
            ) : (
                <button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
                    Next Question
                </button>
            )}
        </div>
    );
}
