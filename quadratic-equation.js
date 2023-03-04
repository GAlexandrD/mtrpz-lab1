export function solveEquation(a, b, c) {
  const isValidParams = validateValues(a, b, c);
  if(!isValidParams) throw new Error('invalid quadratic equation');
  const D = b * b - 4 * a * c;
  if (D < 0) throw new Error('D < 0, equation doesn`t have roots');
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  if (x1 === x2) return [x1];
  else return [x1, x2];
}

function validateValues(a, b, c) {
  const isRealA = Number.isFinite(a);
  const isRealB = Number.isFinite(b);
  const isRealC = Number.isFinite(c);
  const isZeroA = a === 0;
  if (isRealA && isRealB && isRealC && !isZeroA) {
    return true;
  }
  return false;
}
