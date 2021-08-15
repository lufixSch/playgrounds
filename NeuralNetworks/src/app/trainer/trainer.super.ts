import { Input, Perceptron } from '../perceptron/perceptron';

export interface TrainingRow {
  input: Input;
  expectedOutput: number;
}

export class Trainer {
  public Rows: TrainingRow[];

  constructor() {}

  set rows(r: TrainingRow[]) {
    this.Rows = r;
  }

  addRow(row: TrainingRow) {
    this.Rows.push(row);
  }

  public shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
