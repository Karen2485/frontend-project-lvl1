import randomNumber from '../helpers.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calculator = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unexpected operator. Please use only + - *');
  }
};
const getGameData = () => {
  const number1 = randomNumber(0, 10);
  const number2 = randomNumber(0, 10);
  const operatorIndex = operators[randomNumber(0, 2)];
  const gameTask = `${number1} ${operatorIndex} ${number2}`;
  const correctAnswer = String(calculator(number1, operatorIndex, number2));
  return [correctAnswer, gameTask];
};
export { getGameData, gameDescription };
