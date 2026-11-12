import { useState } from "react";

import StartQuizComponent from "./Components/StartQuizComponent";
import QuizCardComponent from "./Components/QuizCardComponent";
import ResultComponent from "./Components/ResultComponent";

export default function App() {
    const [quizStart, setQuizStart] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [resultScore, setResultScore] = useState(0);

    return (
        <>
            {!quizStart ? (
                <StartQuizComponent startQuiz={setQuizStart} />
            ) : !showResult ? (
                <QuizCardComponent
                    showResult={setShowResult}
                    resultScore={setResultScore}
                />
            ) : (
                <ResultComponent resultScore={resultScore} />
            )}
        </>
    );
}
