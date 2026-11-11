import { useState } from "react";

import QUESTIONS from "../data/questions.json";

export default function QuizCardComponent() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    function optionClickHandler(optionIndex, correctIndex, event) {
        event.target.style.backgroundColor =
            optionIndex === correctIndex ? "lightgreen" : "red";

        const buttons = document.querySelectorAll("button");

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
            <button onClick={() => setCurrentQuestion((prev) => prev + 1)}>
                Next Question
            </button>
        </div>
    );
}
