import { createInterface } from 'readline/promises';

const rl = createInterface(process.stdin, process.stdout);

const ask = async (question) => rl.question(question);

const input = async (question, isZeroAllowed) => {
  const answer = await ask(question);
  const isValid = isValidNumber(+answer);
  if (!isZeroAllowed && +answer === 0) {
    rl.write(`this param cannot be 0\n`);
    return await input(question, isZeroAllowed);
  }
  if (isValid) return +answer;
  rl.write(`Error. Expected a valid real number, got ${answer} instead\n`);
  return await input(question, isZeroAllowed);
};

function isValidNumber(num) {
  return Number.isFinite(num);
}

export const askValues = async () => {
  const a = await input('input a:', false);
  const b = await input('input b:', true);
  const c = await input('input c:', true);
  return { a, b, c };
};
