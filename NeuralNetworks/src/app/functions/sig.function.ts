export function sig(x: number) {
  const zaehler = Math.pow(Math.E, x);
  const nenner = 1 + Math.pow(Math.E, x);

  return zaehler / nenner;
}

export function dsig(x: number): number {
  const zaehler = Math.pow(Math.E, x);
  const nenner = Math.pow(1 + Math.pow(Math.E, x), 2);

  return zaehler / nenner;
}
