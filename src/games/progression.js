import randomNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';
const generteProgression = (starts, step, length) => {
  const progress = [];
  let start = starts;
  for (let i = 1; i <= length; i += 1) {
    start += step;
    progress.push(start);
  }
  return progress;
};
const getGameData = () => {
  const progressStart = randomNumber(0, 100);
  const progressStep = randomNumber(1, 4);
  const progressLength = randomNumber(5, 10);
  const elementIndex = randomNumber(0, progressLength - 1);
  const progression = generteProgression(progressStart, progressStep, progressLength);
  const correctAnswer = String(progression[elementIndex]);
  progression[elementIndex] = '..';
  const gameTask = progression.join(' ');
  return [correctAnswer, gameTask];
};

export { getGameData, gameDescription };
