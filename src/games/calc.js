import randomNumber from '../randomNumber.js';

const rules = 'What is the result of the expression?';
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
      throw new Error('ACCESS DENAED');
  }
};
const generateGame = () => {
  const number1 = randomNumber(10);
  const number2 = randomNumber(10);
  const operatorIndex = operators[randomNumber(2)];
  const gameTask = `${number1} ${operatorIndex} ${number2}`;
  const correctAnswer = String(calculator(number1, operatorIndex, number2));
  return [correctAnswer, gameTask];
};
export { generateGame, rules };
