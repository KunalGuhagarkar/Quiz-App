import { useState } from "react";
import "./cardStyles.css";
import QUIZ_JSON from "../../data/quiz.json";

export default function CardComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    function nextQuestionClickHandler() {
        if (currentIndex === QUIZ_JSON.questions.length - 1) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
    }

    function answerClickHandler(optionText) {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(optionText);
    }

    return (
        <div className="card-container">
            <div className="heading-container">
                <h1>Question 1</h1>
            </div>
            <div className="question-container">
                <h2>{QUIZ_JSON.questions[currentIndex].question}</h2>

                <ul>
                    {QUIZ_JSON.questions[currentIndex].options.map(
                        (option, index) => {
                            const correctAnswer =
                                QUIZ_JSON.questions[currentIndex].answer;
                            const isCurrentOptionSelected =
                                selectedAnswer === option;

                            let btnBackgroundColor = "";

                            if (isCurrentOptionSelected) {
                                btnBackgroundColor =
                                    option === correctAnswer
                                        ? "lightgreen"
                                        : "red";
                            }

                            return (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            answerClickHandler(option)
                                        }
                                        style={{
                                            backgroundColor: btnBackgroundColor,
                                        }}
                                        disabled={selectedAnswer !== null}
                                    >
                                        {option}
                                    </button>
                                </li>
                            );
                        },
                    )}
                </ul>
            </div>
            {selectedAnswer !== null && (
                <button onClick={nextQuestionClickHandler}>
                    Next Question
                </button>
            )}
        </div>
    );
}
