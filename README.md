# JavaScript Quiz Application

This is a simple quiz application built with JavaScript, HTML, and CSS. It presents the user with multiple-choice questions, shuffles them randomly, and provides feedback on the selected answers.
## Demo

Try out the calculator [here](https://cftquiz.netlify.app/).

![image](https://github.com/praveensg0/cft/assets/144553645/56516dad-1ae5-4d4e-ae10-7d2de5ad770e)

## Features

- Displays multiple-choice questions.
- Shuffles questions randomly for each session.
- Allows users to select answers and provides feedback.
- Supports restarting the quiz.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/praveensg0/cft.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cft
   ```

3. Open the `index.html` file in your web browser.

## Usage

- Click the "Start Quiz" button to begin.
- Select an answer for each question.
- Click "Check" to verify your answer.
- Continue to the next question or restart the quiz after completion.

## Customization

You can customize the quiz questions by editing the `questions.js` file. Each question is defined as an object with the following properties:

- `question`: The text of the question.
- `options`: An array of answer options.
- `answer`: The index of the correct answer in the `options` array.

Feel free to modify the questions or add new ones to suit your needs.
