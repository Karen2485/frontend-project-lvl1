import randomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const givenNumber = randomNumber(0, 100);
  const correctAnswer = isPrime(givenNumber) ? 'yes' : 'no';
  const gameTask = `${givenNumber}`;
  return [correctAnswer, gameTask];
};
export { getGameData, gameDescription };
