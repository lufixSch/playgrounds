import { Perceptron } from './perceptron';
import { sig, dsig } from '../functions/sig.function';

export class SigPerceptron extends Perceptron {
  constructor(public inputCount: number) {
    super(inputCount);
  }

  actFunc(x: number): number {
    return sig(x);
  }

  arActFunc(x: number): number {
    return null;
  }

  dActFunc(x: number): number {
    return dsig(x);
  }
}
