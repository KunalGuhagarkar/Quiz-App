# Quiz App

A browser-based General Knowledge quiz built with React. It presents multiple-choice questions one at a time, gives instant feedback on each answer, and shows your final score at the end.

This project is based on the [Quiz App project](https://roadmap.sh/projects/quiz-app) from [roadmap.sh](https://roadmap.sh/).

## Features

- **Start screen** with instructions and a "Start Test" button
- **Question cards**: one question at a time, with the answer options shown as buttons
- **Instant feedback**: the option you pick turns green if it's correct or red if it's wrong, and the correct answer is shown when you get it wrong
- **Live score** displayed on every question
- **Locked answers**: once you pick an answer you can't change it
- **Result screen** with your score out of the total, your percentage, and a feedback message based on how well you did
- **Try Again** button to restart the quiz
- **JSON-driven questions**: the quiz content lives in `src/data/quiz.json`, so it's easy to edit or replace

## Tech Stack

- [React](https://react.dev/) 19 (hooks for state management)
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5.0.1)
- Plain CSS, with a stylesheet per page component
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest for testing

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
│   ├── data/
│   │   └── quiz.json                  # Quiz title and questions
│   ├── pages/
│   │   ├── start-component/           # Welcome screen and instructions
│   │   ├── card-component/            # Question card, answers and score
│   │   └── result-component/          # Final score and feedback
│   ├── App.js                         # Switches between start, quiz and result screens
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customizing the Quiz

All questions are stored in `src/data/quiz.json`. Add, remove or edit entries in the `questions` array. Each question has this shape:

```json
{
  "id": 1,
  "question": "What planet is known as a red planet?",
  "options": ["Earth", "Mars", "Venus", "Mercury"],
  "answer": "Mars"
}
```

The `answer` value must exactly match one of the strings in `options`. The result screen picks up the new question count automatically.

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