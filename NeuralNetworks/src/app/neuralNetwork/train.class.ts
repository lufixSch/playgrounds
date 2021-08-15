import { Trainer } from '../trainer/trainer.super';
import { Network } from './network.class';
import { Perceptron, Weight } from '../perceptron/perceptron';

export class NetworkTrainer extends Trainer {
  constructor(private adjust: number[], private rounds: number) {
    super();
  }

  train(network: Network) {
    console.log('trying to Train Network with this data:', this.Rows);
    for (let r = 0; r < this.rounds; r++) {
      this.Rows = this.shuffle([...this.Rows]);
      this.Rows.forEach(row => {
        // const inputs = this.shuffle(row.input);
        const inputs = row.input;

        network.inputs = inputs;

        const diff = network.output() - row.expectedOutput;

        if (Math.abs(diff) > 0) {
          for (let layer = network.layerCount - 1; layer >= 0; layer--) {
            this.backpropagation(network, diff, layer === network.layerCount - 1, layer);
          }
        }
      });
    }
    console.log(network);
  }

  private backpropagation(network: Network, diff: number, lastLayer: boolean, layer: number) {
    for (const node in network.Nodes[layer]) {
      if (network.Nodes[layer].hasOwnProperty(node)) {
        const perceptron = network.Nodes[layer][node];

        const net = this.calcNet(perceptron);

        let roh = perceptron.dActFunc(net) * diff;

        if (!lastLayer) {
          roh = perceptron.dActFunc(net) * this.calcRoh(network, layer, Number(node));
        }

        perceptron.lastRoh = roh;

        for (let key = 0; key < perceptron.inputCount; key++) {
          const deltaW = -this.adjust[layer] * roh * perceptron.inputs[key];
          perceptron.weights[key] += deltaW;
        }

        perceptron.bias -= this.adjust[layer] * diff;
      }
    }
  }

  private calcNet(perceptron: Perceptron) {
    let net = perceptron.bias;

    for (let i = 0; i < perceptron.inputCount; i++) {
      net += perceptron.inputs[i] * perceptron.weights[i];
    }

    return net;
  }

  private calcRoh(network: Network, layer: number, node: number) {
    const itterationLayer = layer + 1;
    let roh = 0;

    for (const key in network.Nodes[itterationLayer]) {
      if (network.Nodes[itterationLayer].hasOwnProperty(key)) {
        const perceptron = network.Nodes[itterationLayer][key];

        roh += perceptron.lastRoh * perceptron.weights[node];
      }
    }

    return roh;
  }
}
