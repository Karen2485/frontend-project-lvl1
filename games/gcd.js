import {
  congratulation, correctAnswer, randomNumber, welcome, wrongAnswer, answer, haveName,
  greeting,
} from '../src/index.js';

const greatestCommonDivisor = () => {
  welcome();
  const name = haveName();
  greeting(name);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= 3; i += 1) {
    let number1 = (randomNumber(150) + 1);
    let number2 = (randomNumber(150) + 1);
    let divider = 0;
    console.log(`Question: ${number1} ${number2}`);
    while (number1 !== number2) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
      divider = number1;
    }
    const userAnswer = Number(answer());
    if (userAnswer !== divider) {
      wrongAnswer(userAnswer, divider, name);
      return;
    }
    correctAnswer();
  }
  congratulation(name);
};
export default greatestCommonDivisor;
