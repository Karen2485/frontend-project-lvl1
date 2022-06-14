import readLineSync from 'readline-sync';
import {
  congratulation, correctAnswer, randomNumber, welcome, wrongAnswer,
} from '../src/index.js';

const calculator = () => {
  welcome();
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    const number1 = randomNumber(10);
    const number2 = randomNumber(10);
    const operatorIndex = randomNumber(2);
    let res = 0;
    let question = '';
    switch (operatorIndex) {
      case 0: question = (`Question:  ${number1} + ${number2}`);
        res = number1 + number2;
        break;
      case 1: question = (`Question:  ${number1} - ${number2}`);
        res = number1 - number2;
        break;
      case 2: question = (`Question:  ${number1} * ${number2}`);
        res = number1 * number2;
        break;
      default:
    }
    console.log(question);
    const expressionAnswer = Number(readLineSync.question('Your answer: '));
    if (expressionAnswer !== res) {
      wrongAnswer(expressionAnswer, res, name);
      return;
    }
    correctAnswer();
  }
  congratulation(name);
};
export default calculator;