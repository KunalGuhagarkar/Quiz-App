import "./startStyles.css";

export default function StartComponent() {
    return (
        <div className="start-container">
            <h1>Welcome to The Quiz App!</h1>

            <div className="instruction-container">
                <h2>Instructions:</h2>
                <ul>
                    <li>
                        <span className="bold-text">Read Carefully:</span> Read each question thoroughly before
                        selecting your answer.
                    </li>
                    <li>
                        <span className="bold-text">Select One Answer:</span> Choose the single best option for
                        each question.
                    </li>
                    <li>
                        <span className="bold-text">Track Your Time:</span> Keep an eye on the timer—points are
                        awarded based on both speed and accuracy.
                    </li>
                    <li>
                        <span className="bold-text">No Going Back:</span> Once you submit an answer, you cannot
                        return to modify it.
                    </li>
                    <li>
                        <span className="bold-text">Review Results:</span> Your final score, detailed feedback, and
                        correct answers will be displayed at the end.
                    </li>
                </ul>
            </div>

            <button className="start-test-btn">Start Test</button>
        </div>
    );
}
