import QUESTIONS from "../data/questions.json";

export default function QuizCardComponent() {
    function optionClickHandler(optionIndex, correctIndex, event) {
        event.target.style.backgroundColor =
            optionIndex === correctIndex ? "lightgreen" : "red";


        document.querySelectorAll("button").forEach((btn) => {
            optionIndex !== correctIndex && btn.style.backgroundColor("lightgreen");

            btn.disabled = true;
        });
    }

    return (
        <div>
            {QUESTIONS.questions.map((question) => {
                return (
                    <div key={question.id}>
                        <h3>{question.question}</h3>
                        <ul>
                            {question.options.map((option, index) => {
                                return (
                                    <li key={index}>
                                        <button
                                            onClick={(event) =>
                                                optionClickHandler(
                                                    index,
                                                    question.correctIndex,
                                                    event,
                                                )
                                            }
                                        >
                                            {option}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
