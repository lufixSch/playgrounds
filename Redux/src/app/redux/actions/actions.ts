import { StoreData } from '../types/todo.types';
import { Meta } from './meta';

export interface Action<T> {
  type: string;
  meta: Meta;
  payload: { [key: string]: any };
  reduce: (state: { [key: string]: T }) => { [key: string]: T };
}
