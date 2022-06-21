import randomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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
const generateGame = () => {
  const givenNumber = randomNumber(100) + 2;
  const correctAnswer = isPrime(givenNumber) ? 'yes' : 'no';
  const gameTask = `${givenNumber}`;
  return [correctAnswer, gameTask];
};
export { generateGame, rules };
