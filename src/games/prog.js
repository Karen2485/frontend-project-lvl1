import randomNumber from '../randomNumber.js';

const rules = 'What number is missing in the progression?';
const generteProgression = (starts, step, length) => {
  const progress = [];
  let start = starts;
  for (let i = 1; i <= length; i += 1) {
    start += step;
    progress.push(start);
  }
  return progress;
};
const generateGame = () => {
  const progressStart = randomNumber(100);
  const progressStep = randomNumber(4) + 1;
  const progressLength = randomNumber(5) + 5;
  const elementIndex = randomNumber(progressLength);
  const progression = generteProgression(progressStart, progressStep, progressLength);
  const correctAnswer = String(progression[elementIndex]);
  console.log(correctAnswer);
  progression[elementIndex] = '..';
  const gameTask = progression.join(' ');
  return [correctAnswer, gameTask];
};

export { generateGame, rules };
