import {
  congratulation, correctAnswer, randomNumber, welcome, wrongAnswer, question, answer, haveName,
  greeting,
} from '../src/index.js';

const progression = () => {
  welcome();
  const name = haveName();
  greeting(name);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= 3; i += 1) {
    const progress = [];
    let progressStart = randomNumber(100);
    const progressStep = randomNumber(4) + 1;
    const progressLength = randomNumber(5) + 5;
    for (let k = 1; k <= progressLength; k += 1) {
      progressStart += progressStep;
      progress.push(progressStart);
    }
    const elementIndex = randomNumber(progressLength);
    const hiddenElement = progress[elementIndex].toString();
    progress[elementIndex] = '..';
    const str = progress.join(' ');
    question(str);
    const userAnswer = answer();
    if (userAnswer !== hiddenElement) {
      wrongAnswer(userAnswer, hiddenElement, name);
      return;
    }
    correctAnswer();
  }
  congratulation(name);
};
export default progression;
