import { inputFile } from './file-input.js';
import { askValues } from './interactive.js';
import { solveEquation } from './quadratic-equation.js';

const filePath = process.argv[2];

const log = (...args) => console.log(...args);

if (filePath) {
  readFile(filePath);
} else {
  input();
}

async function input() {
  const { a, b, c } = await askValues();
  solve(a, b, c);
  process.exit(0);
}

async function readFile(path) {
  const { a, b, c } = await inputFile(path);
  solve(a, b, c);
  process.exit(1);
}

function solve(a, b, c) {
  log('equation: (%f) x^2 + (%f) x + %f', a, b, c);
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
