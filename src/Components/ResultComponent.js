import QUESTIONS from "../data/questions.json";

export default function ResultComponent({ resultScore }) {
    return (
        <div>
            <h1>Your Score is {resultScore}</h1>

            {QUESTIONS.questions.map((question, index) => {
                return (
                    <div key={index}>
                        <h3>{question.question}</h3>
                        <ul>
                            {question.options.map((option, index) => {
                                return <li key={index}>{option}</li>;
                            })}
                        </ul>
                        <h4>
                            Correct Answer:{" "}
                            {question.options[question.correctIndex]}
                        </h4>
                    </div>
                );
            })}
        </div>
    );
}
