import randomNumber from '../randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const greatestCommonDivisor = (a, b) => {
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
const generateGame = () => {
  const num1 = (randomNumber(150) + 1);
  const num2 = (randomNumber(150) + 1);
  const gameTask = `${num1} ${num2}`;
  const correctAnswer = String(greatestCommonDivisor(num1, num2));
  return [correctAnswer, gameTask];
};
export { generateGame, rules };
