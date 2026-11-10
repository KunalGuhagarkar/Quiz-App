export default function StartQuizComponent({ startQuiz }) {

    return (
        <div>
            <button onClick={() => startQuiz(true)}>Start Quiz</button>
        </div>
    );
}
