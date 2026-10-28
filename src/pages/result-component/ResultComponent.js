import "./resultStyles.css";
import QUIZ_RESULT from "../../data/quiz.json";

export default function ResultComponent({
    score,
    totalQuestions = 5,
    onRestart,
}) {
    const percentage = Math.round((score / totalQuestions) * 100);

    // Dynamic message based on score
    const getFeedback = () => {
        if (percentage >= 80) return "Outstanding Job! 🎉";
        if (percentage >= 50) return "Good Effort! 👍";
        return "Keep Practicing! 💪";
    };

    return (
        <div className="result-card">
            <h1 className="result-title">Quiz Completed</h1>

            <div className="score-badge">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {totalQuestions}</span>
            </div>

            <p className="result-feedback">{getFeedback()}</p>
            <p className="result-percentage">You scored {percentage}%</p>

            <div className="result-container">
                {QUIZ_RESULT.questions.map((question) => {
                    return (
                        <div key={question.id} className="question-review-item">
                            <h3>Question {question.id}</h3>
                            <p>{question.question}</p>
                            <p>Correct Answer: {question.answer}</p>
                        </div>
                    );
                })}
            </div>

            {onRestart && (
                <button className="restart-btn" onClick={onRestart}>
                    Try Again
                </button>
            )}
        </div>
    );
}
