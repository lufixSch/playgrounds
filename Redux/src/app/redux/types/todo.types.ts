export interface StoreData {
  [id: string]: ToDo;
}

export interface ToDo {
  task: string;
  done: boolean;
}
