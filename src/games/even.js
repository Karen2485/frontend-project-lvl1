import randomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const getGameData = () => {
  const givenNumber = randomNumber(0, 100);
  const gameTask = `${givenNumber}`;
  const correctAnswer = isEven(givenNumber) ? 'yes' : 'no';
  return [correctAnswer, gameTask];
};
export { getGameData, gameDescription };
