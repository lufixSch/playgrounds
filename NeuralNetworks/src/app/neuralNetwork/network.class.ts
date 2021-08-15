import { Input, Perceptron } from '../perceptron/perceptron';
import { SigPerceptron } from '../perceptron/sig.perceptron';
import { TanhPerceptron } from '../perceptron/tanh.perceptron';

export type Layer = Perceptron[];
export type Nodes = Layer[];

export class Network {
  private LayerCount: number;
  private inputCount: number;
  private Inputs: Input;

  public Nodes: Nodes;

  constructor(private params: number[]) {
    this.LayerCount = params.length - 1;
    this.inputCount = params[0];
    this.Inputs = new Array(this.inputCount);
    this.Nodes = new Array(this.LayerCount);

    for (let i = 1; i < params.length; i++) {
      this.Nodes[i - 1] = new Array<Perceptron>(params[i]);
      for (let j = 0; j < params[i]; j++) {
        if (i < params.length - 1) {
          this.Nodes[i - 1][j] = new TanhPerceptron(params[i - 1]);
        } else {
          this.Nodes[i - 1][j] = new SigPerceptron(params[i - 1]);
        }
      }
    }
  }

  create() {
    for (const layers in this.Nodes) {
      if (this.Nodes.hasOwnProperty(layers)) {
        for (const perceptron in this.Nodes[layers]) {
          if (this.Nodes[layers].hasOwnProperty(perceptron)) {
            const element = this.Nodes[layers][perceptron];

            for (let i = 0; i < element.inputCount; i++) {
              this.Nodes[layers][perceptron].weights[i] = Math.random();
            }

            this.Nodes[layers][perceptron].bias = Math.random();
          }
        }
      }
    }
  }

  get layerCount() {
    return this.LayerCount;
  }

  set inputs(i: Input) {
    if (i.length === this.inputCount) {
      this.Inputs = i;
    }
  }

  output() {
    let inputs = this.Inputs;

    for (const layers in this.Nodes) {
      if (this.Nodes.hasOwnProperty(layers)) {
        const layer = this.Nodes[layers];
        const nextInputs: Input = [];

        for (const perceptrons in layer) {
          if (layer.hasOwnProperty(perceptrons)) {
            const perceptron = layer[perceptrons];
            perceptron.inputs = inputs;
            nextInputs.push(perceptron.output());
          }
        }

        inputs = nextInputs;
      }
    }

    return inputs[0];
  }
}
