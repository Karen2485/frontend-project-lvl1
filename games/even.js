import readLineSync from 'readline-sync';
import {
  congratulation, correctAnswer, randomNumber, welcome, wrongAnswer, answer, haveName,
  greeting,
} from '../src/index.js';

const game = () => {
  welcome();
  const name = haveName();
  greeting(name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const isEven = Math.round(Math.random() * 100);
    console.log(`Question: ${isEven}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (isEven % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (isEven % 2 !== 0 && userAnswer !== 'no') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      return;
    }
    if (isEven % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (isEven % 2 === 0 && userAnswer !== 'yes') {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    }
  }
  congratulation(name);
};
export default game;
