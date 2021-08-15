import { Perceptron } from './perceptron';
import { Trainer } from '../trainer/trainer.super';

export class PerceptronTrainer extends Trainer {
  constructor(private adjust: number, private rounds: number) {
    super();
  }

  train(perceptron: Perceptron) {
    for (let r = 0; r < this.rounds; r++) {
      this.Rows = this.shuffle(this.Rows);
      this.Rows.forEach(row => {
        // const inputs = this.shuffle(row.input);
        const inputs = row.input;

        inputs.forEach((input, i) => {
          perceptron.inputs[i] = input;
        });

        const diff = perceptron.output() - row.expectedOutput;
        const delta = this.adjust * diff;

        if (Math.abs(diff) > 0) {
          this.backpropagation(perceptron, diff);
          perceptron.bias -= delta;
        }
      });
    }
    console.log(perceptron);
  }

  private backpropagation(perceptron: Perceptron, diff: number) {
    let net = perceptron.bias;

    for (let i = 0; i < perceptron.inputCount; i++) {
      net += perceptron.inputs[i] * perceptron.weights[i];
    }

    const roh = perceptron.dActFunc(net) * diff;

    for (let key = 0; key < perceptron.inputCount; key++) {
      const deltaW = -this.adjust * roh * perceptron.inputs[key];
      perceptron.weights[key] += deltaW;
    }
  }
}
