# Quiz App

A browser-based JavaScript quiz built with React. It shows multiple-choice questions one at a time, gives instant feedback on each answer, and shows your final score along with the correct answers at the end.

Based on the [Quiz App project](https://roadmap.sh/projects/quiz-app) from [roadmap.sh](https://roadmap.sh/).

## Features

- **Start screen** with the quiz title, description and instructions, plus a "Start Quiz" button
- **One question at a time**, with the answer options shown as buttons
- **Instant feedback**: the option you pick turns green if it's correct or red if it's wrong, and the correct answer is highlighted when you get it wrong
- **Locked answers**: once you pick an option, all options are disabled
- **Per-question countdown timer**: each question has a 10-second timer. When it reaches 0 the quiz moves to the next question automatically, or to the result screen on the last question
- **Next Question / Show Result** buttons to move on without waiting for the timer
- **Result screen** showing your score, plus every question with its options and the correct answer
- **JSON-driven content**: the title, description, instructions and questions all live in `src/data/questions.json`

## Tech Stack

- [React](https://react.dev/) 19 (hooks: `useState`, `useEffect`)
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5.0.1)
- Plain CSS, with one stylesheet per component
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest (set up via Create React App)

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/KunalGuhagarkar/Quiz-App.git
   cd Quiz-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app runs at [http://localhost:3000](http://localhost:3000) and reloads automatically when you edit a file.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode on port 3000. |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run build` | Creates an optimized production build in the `build` folder. |
| `npm run eject` | Ejects from Create React App. **This is a one-way operation.** |

## Project Structure

```
Quiz-App/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── StartQuizComponent.js      # Welcome screen and instructions
│   │   ├── QuizCardComponent.js       # Question card, answer feedback and timer
│   │   └── ResultComponent.js         # Final score and answer review
│   ├── Styles/
│   │   ├── startquizStyle.css
│   │   ├── quizcardStyle.css
│   │   └── resultStyle.css
│   ├── data/
│   │   └── questions.json             # Quiz title, instructions and questions
│   ├── App.js                         # Switches between start, quiz and result screens
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## How It Works

`App.js` holds three pieces of state and renders one screen at a time:

1. **Start screen** (`StartQuizComponent`) until the user clicks "Start Quiz"
2. **Quiz screen** (`QuizCardComponent`) until the quiz finishes, either through the "Show Result" button or when the timer runs out on the last question
3. **Result screen** (`ResultComponent`), which receives the final score

`QuizCardComponent` tracks the current question, the score and the remaining seconds. One effect restarts a 10-second countdown whenever the question changes. A second effect advances the quiz when the countdown reaches 0.

## Customizing the Quiz

Everything is configured in `src/data/questions.json`:

```json
{
    "title": "JavaScript Basics",
    "description": "10 questions to test your JS knowledge.",
    "instructions": [
        "This quiz has 10 multiple-choice questions.",
        "Each question has exactly one correct answer."
    ],
    "questions": [
        {
            "id": 1,
            "question": "What does typeof null return?",
            "options": ["null", "object", "undefined", "number"],
            "correctIndex": 1
        }
    ]
}
```

| Field | Description |
| --- | --- |
| `title` | Heading on the start screen |
| `description` | Subheading on the start screen |
| `instructions` | List of instructions shown on the start screen |
| `questions[].id` | Unique number for each question. Keep these unique, because they are used as React keys |
| `questions[].question` | The question text |
| `questions[].options` | Array of answer choices |
| `questions[].correctIndex` | **Zero-based index** of the correct option in `options` |

Add, remove or edit entries in the `questions` array. The result screen picks up the new question count automatically.

To change the time limit, update the `10` used for the timer in `QuizCardComponent.js`. If you do, also update the time limit mentioned in the `instructions` in `questions.json`.

## Building for Production

```bash
npm run build
```

The optimized, minified output is written to the `build` folder and is ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.). See the [Create React App deployment guide](https://create-react-app.dev/docs/deployment/) for platform-specific steps.

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Author

**Kunal Guhagarkar** - [@KunalGuhagarkar](https://github.com/KunalGuhagarkar)