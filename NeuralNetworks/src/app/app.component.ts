import { Component, OnInit } from '@angular/core';
import { SigPerceptron } from './perceptron/sig.perceptron';
import { PerceptronTrainer } from './perceptron/train';
import { bookData } from './dummyData/book.data';
import { sysData } from './dummyData/sys.data';
import { Network } from './neuralNetwork/network.class';
import { NetworkTrainer } from './neuralNetwork/train.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'ng-demo';
  //
  firstInput: number;
  secondInput: number;
  // expectedOutput: number;
  //
  output: number;
  //
  // perceptron = new SigPerceptron(2);
  // trainer = new PerceptronTrainer(0.1, 500);
  network = new Network([2, 20, 5, 1]);
  networkTrainer = new NetworkTrainer([1, 0.8, 0.2], 5000);

  constructor() {
    this.network.create();
    this.networkTrainer.Rows = sysData;
    this.networkTrainer.train(this.network);

    console.log({ ...this.network });

    // this.perceptron.create();
    // this.trainer.rows = sysData;
    // this.trainer.train(this.perceptron);
  }

  ngOnInit() {
    // console.log(this.perceptron);
  }

  onCalculate() {
    // this.perceptron.inputs = [this.firstInput, this.secondInput];
    // this.output = this.perceptron.output();
    // console.log(this.output);

    this.network.inputs = [this.firstInput, this.secondInput];
    this.output = this.network.output();
    console.log({ ...this.network });
  }

  onTrain() {
    this.networkTrainer.train(this.network);
    // if (this.firstInput && this.secondInput && this.expectedOutput) {
    //   const row = {
    //     input: [this.firstInput, this.secondInput],
    //     expectedOutput: this.expectedOutput
    //   };
    //   this.trainer.addRow(row);
    // }

    // this.trainer.train(this.perceptron);
  }
}
