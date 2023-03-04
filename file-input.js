import fs from 'fs/promises';

export const inputFile = async (path) => {
  try {
    const data = (await fs.readFile(path)).toString();
    const { a, b, c } = parseParams(data);
    const [isValid, error] = validateParams(+a, +b, +c);
    if (isValid) {
      return { a: +a, b: +b, c: +c };
    } else throw error;
  } catch (error) {
    console.log(error.message);
  }
  process.exit(1);
};

function parseParams(data) {
  const [a, b, c] = data.replace('\r', '').split('\n')[0].split(/\s/);
  return { a, b, c };
}

function validateParams(a, b, c) {
  const isRealA = Number.isFinite(a);
  const isRealB = Number.isFinite(b);
  const isRealC = Number.isFinite(c);
  if (!isRealA || !isRealB || !isRealC) {
    return [false, new Error('invalid file format')];
  }
  if (a === 0) {
    return [false, new Error('a cannot be 0')];
  }
  return [true];
}
