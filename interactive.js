import { createInterface } from 'readline/promises';

const rl = createInterface(process.stdin, process.stdout);

const ask = async (question) => rl.question(question);

const inputA = async () => {
  const answer = await ask('input a: ');
  const isValid = isValidNumber(+answer);
  const isZero = +answer === 0;
  if (isValid && !isZero) return +answer;
  if (!isValid) {
    rl.write(`Error. Expected a valid real number, got ${answer} instead\n`);
  } else rl.write(`a cannot be 0\n`);
  return await inputA();
};

const inputB = async () => {
  const answer = await ask('input b: ');
  const isValid = isValidNumber(+answer);
  if (isValid) return +answer;
  rl.write(`Error. Expected a valid real number, got ${answer} instead\n`);
  return await inputB();
};

const inputC = async () => {
  const answer = await ask('input c: ');
  const isValid = isValidNumber(+answer);
  if (isValid) return +answer;
  rl.write(`Error. Expected a valid real number, got ${answer} instead\n`);
  return await inputC();
};

function isValidNumber(num) {
  return Number.isFinite(num);
}

export const askValues = async () => {
  const a = await inputA();
  const b = await inputB();
  const c = await inputC();
  return { a, b, c };
};
