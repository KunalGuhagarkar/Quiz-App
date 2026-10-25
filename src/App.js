import { useState } from "react";
import "./App.css";
import StartComponent from "./pages/start-component/StartComponent";
import CardComponent from "./pages/card-component/CardComponent";
import ResultComponent from "./pages/result-component/ResultComponent";

import QUIZ_JSON from "./data/quiz.json";

function App() {
    const [startQuiz, setStartQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleRestart = () => {
        setStartQuiz(false);
        setShowResult(false);
        setScore(0);
    };

    return (
        <>
            {!startQuiz ? (
                <StartComponent onStart={() => setStartQuiz(true)} />
            ) : !showResult ? (
                <CardComponent
                    onResult={() => setShowResult(true)}
                    setFinalScore={setScore}
                />
            ) : (
                <ResultComponent
                    score={score}
                    onRestart={handleRestart}
                    totalQuestions={QUIZ_JSON.questions.length}
                />
            )}
        </>
    );
}

export default App;
