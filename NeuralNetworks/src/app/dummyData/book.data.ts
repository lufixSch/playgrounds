import { TrainingRow } from '../trainer/trainer.super';

export const bookData: TrainingRow[] = [
  {
    input: [0, 1],
    expectedOutput: 0
  },
  {
    input: [0.5, 1],
    expectedOutput: 0
  },
  {
    input: [1, 0],
    expectedOutput: 0
  },
  {
    input: [1.5, 5.0],
    expectedOutput: 0
  },
  {
    input: [3, 3],
    expectedOutput: 0
  },
  {
    input: [3.5, 0],
    expectedOutput: 0
  },
  {
    input: [1, 6],
    expectedOutput: 1
  },
  {
    input: [2, 9],
    expectedOutput: 1
  },
  {
    input: [4, 6],
    expectedOutput: 1
  },
  {
    input: [5.5, 1],
    expectedOutput: 1
  },
  {
    input: [6, 4],
    expectedOutput: 1
  },
  {
    input: [9, 3],
    expectedOutput: 1
  }
];
