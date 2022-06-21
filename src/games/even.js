import randomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const generateGame = () => {
  const givenNumber = randomNumber(100);
  const gameTask = `${givenNumber}`;
  const correctAnswer = isEven(givenNumber) ? 'yes' : 'no';
  return [correctAnswer, gameTask];
};
export { generateGame, rules };
