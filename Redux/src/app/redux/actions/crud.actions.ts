import { Action } from './actions';
import { omit } from 'lodash';
import { Meta } from './meta';

class CRUDAction<T> implements Action<T> {
  type: string;
  meta: Meta;
  payload: { [key: string]: any };

  constructor() {}

  reduce(state: { [key: string]: T }): { [key: string]: T } {
    return state;
  }
}

export class CreateAction<T> extends CRUDAction<T> {
  type = 'CREATE';

  constructor(private typeExt: string, public payload: { id: string; data: T }, public meta: Meta) {
    super();

    this.type += '_' + typeExt;
  }

  reduce(state: { [key: string]: T }): { [key: string]: T } {
    return { ...state, [this.payload.id]: this.payload.data };
  }
}

export class DeleteAction<T> extends CRUDAction<T> {
  type = 'DELETE';

  constructor(private typeExt: string, public payload: { id: string }, public meta: Meta) {
    super();

    this.type += '_' + typeExt;
  }

  reduce(state: { [key: string]: T }): { [key: string]: T } {
    return omit(state, this.payload.id);
  }
}

export class UpdateAction<T> extends CRUDAction<T> {
  type = 'UPDATE';

  constructor(
    private typeExt: string,
    public payload: { id: string; data: Partial<T> },
    public meta: Meta
  ) {
    super();

    this.type += '_' + typeExt;
  }

  reduce(state: { [key: string]: T }): { [key: string]: T } {
    const updated = { ...state[this.payload.id], ...this.payload.data };

    return { ...state, [this.payload.id]: updated };
  }
}
