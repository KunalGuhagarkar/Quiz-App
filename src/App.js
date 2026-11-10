import { useState } from "react";

import StartQuizComponent from "./Components/StartQuizComponent";
import QuizCardComponent from "./Components/QuizCardComponent";

export default function App() {
    const [quizStart, setQuizStart] = useState(false);

    return (
        <>
            {!quizStart ? (
                <StartQuizComponent startQuiz={setQuizStart} />
            ) : (
                <QuizCardComponent />
            )}
        </>
    );
}
