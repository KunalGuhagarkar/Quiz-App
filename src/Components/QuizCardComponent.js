import { useState } from "react";

import QUESTIONS from "../data/questions.json";

export default function QuizCardComponent({ showResult, resultScore }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    function optionClickHandler(optionIndex, correctIndex, event) {
        event.target.style.backgroundColor =
            optionIndex === correctIndex ? "lightgreen" : "red";

        optionIndex === correctIndex && setScore((prevScore) => prevScore + 1);

        const buttons = document.querySelectorAll(".options-btn");

        if (optionIndex !== correctIndex) {
            buttons[correctIndex].style.backgroundColor = "lightgreen";
        }

        buttons.forEach((btn) => {
            btn.disabled = true;
        });
    }

    return (
        <div>
            <div key={QUESTIONS.questions[currentQuestion].id}>
                <h3>{QUESTIONS.questions[currentQuestion].question}</h3>
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
