import randomNumber from '../helpers.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (a, b) => {
  let divider = 0;
  let number1 = a;
  let number2 = b;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
    divider = number1;
  }
  return divider;
};
const getGameData = () => {
  const num1 = randomNumber(1, 150);
  const num2 = randomNumber(1, 150);
  const gameTask = `${num1} ${num2}`;
  const correctAnswer = String(getGreatestCommonDivisor(num1, num2));
  return [correctAnswer, gameTask];
};
export { getGameData, gameDescription };
