import { useState } from "react";
import "./cardStyles.css";
import QUIZ_JSON from "../../data/quiz.json";

export default function CardComponent({ onResult, setFinalScore }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const [score, setScore] = useState(0);

    function nextQuestionClickHandler() {
        if (currentIndex === QUIZ_JSON.questions.length - 1) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
    }

    function answerClickHandler(optionText) {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(optionText);
        if (optionText === QUIZ_JSON.questions[currentIndex].answer) {
            const nextScore = score + 1;

            setScore(nextScore);
            setFinalScore(nextScore);
        }
    }

    return (
        <div className="card-container">
            <div className="heading-container">
                <h1>Question {QUIZ_JSON.questions[currentIndex].id}</h1>
                <h2>Score: {score}</h2>
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
                <>
                    {selectedAnswer !==
                        QUIZ_JSON.questions[currentIndex].answer && (
                        <p>
                            Correct Answer was{" "}
                            {QUIZ_JSON.questions[currentIndex].answer}
                        </p>
                    )}

                    <button onClick={nextQuestionClickHandler}>
                        Next Question
                    </button>
                </>
            )}

            {currentIndex === QUIZ_JSON.questions.length - 1 && (
                <button onClick={onResult}>Show Result</button>
            )}
        </div>
    );
}
