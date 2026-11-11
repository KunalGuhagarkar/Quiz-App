import QUESTIONS from "../data/questions.json";

import "../Styles/startquizStyle.css";

export default function StartQuizComponent({ startQuiz }) {
    return (
        <div className="start-quiz">
            <h1 className="start-quiz__title">{QUESTIONS.title}</h1>
            <h3 className="start-quiz__description">{QUESTIONS.description}</h3>
            <ul className="start-quiz__instructions">
                {QUESTIONS.instructions.map((instruction, index) => {
                    return <li key={index}>{instruction}</li>;
                })}
            </ul>
            <button
                className="start-quiz__button"
                onClick={() => startQuiz(true)}
            >
                Start Quiz
            </button>
        </div>
    );
}
