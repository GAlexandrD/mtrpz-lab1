import { askValues } from './interactive.js';
import { solveEquation } from './quadratic-equation.js';

const log = (...args) => console.log(...args);

const input = async () => {
  const { a, b, c } = await askValues();
  log('equation: (%f) x^2 + (%f) x + %f', a, b, c);
  solveEquation(a, b, c);
  process.exit(0);
};

function solveEquation(a, b, c) {
  try {
    const [x1, x2] = solveEquation(a, b, c);
    if (x2 === undefined) {
      log('equation has 1 root: ', x1);
    } else {
      log('equation has 2 roots: \nx1: %f \nx2: %f', x1, x2);
    }
  } catch (error) {
    log(error.message);
  }
}

input();
