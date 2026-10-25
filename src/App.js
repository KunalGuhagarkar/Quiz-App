import { useState } from "react";
import "./App.css";
import StartComponent from "./pages/start-component/StartComponent";
import CardComponent from "./pages/card-component/CardComponent";

function App() {
    const [startQuiz, setStartQuiz] = useState(false);

    return (
        <>
            {!startQuiz ? (
                <StartComponent onStart={() => setStartQuiz(true)} />
            ) : (
                <CardComponent />
            )}
        </>
    );
}

export default App;
  