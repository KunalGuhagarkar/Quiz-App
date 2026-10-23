import "./cardStyles.css"

export default function CardComponent() {
    return (
        <div className="card-container">
            <div className="heading-container">
                <h1>Question 1</h1>
            </div>
            <div className="question-container">
                <h2>What is my Name?</h2>

                <ul>
                    <li>
                        <button>Kunal</button>
                    </li>
                    <li>
                        <button>Oink</button>
                    </li>
                    <li>
                        <button>Piggy</button>
                    </li>
                    <li>
                        <button>Ladz</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
