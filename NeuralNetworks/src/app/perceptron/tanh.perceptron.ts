import { Perceptron } from './perceptron';
import { tanh, dtanh } from '../functions/tanh.function';

export class TanhPerceptron extends Perceptron {
  constructor(public inputCount: number) {
    super(inputCount);
  }

  actFunc(x: number): number {
    return tanh(x);
  }

  arActFunc(x: number): number {
    return null;
  }

  dActFunc(x: number): number {
    return dtanh(x);
  }
}
