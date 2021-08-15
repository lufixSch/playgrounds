export type Input = number[];
export type Weight = number[];
export type Roh = number;
export type Bias = number;

export class Perceptron {
  public inputs: Input;
  public weights: Weight;
  public lastRoh: Roh;
  public bias: Bias;

  constructor(public inputCount: number) {
    this.inputs = new Array(inputCount);
    this.weights = new Array(inputCount);
    this.lastRoh = 0;
    this.bias = 0;
  }

  create() {
    this.weights.map(() => Math.random);
    this.bias = Math.random();
  }

  output() {
    let x = this.bias;

    for (let i = 0; i < this.inputCount; i++) {
      x += this.inputs[i] * this.weights[i];
    }

    return this.actFunc(x);
  }

  actFunc(x: number): number {
    return null;
  }

  arActFunc(x: number): number {
    return null;
  }

  dActFunc(x: number): number {
    return null;
  }
}
