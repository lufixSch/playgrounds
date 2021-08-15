export function tanh(x: number) {
  return Math.tanh(x);
}

export function dtanh(x: number): number {
  const e = Math.E;
  const pow = Math.pow;

  const zaehler = 4 * pow(e, x);
  const naenner = pow(pow(e, 2 * x) + 1, 2);

  return zaehler / naenner;
}
