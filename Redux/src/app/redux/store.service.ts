import { Injectable } from '@angular/core';
import { Action } from './actions/actions';
import { Observable, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { StoreData } from './types/todo.types';

const win = window as any;
win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect();

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state: Observable<StoreData>;
  private actions: BehaviorSubject<Action<any>> = new BehaviorSubject(null);

  constructor() {
    this.state = this.actions.pipe(this.reducer());
  }

  private reducer() {
    return scan<any>((state: StoreData, action: Action<any>) => {
      const next = action.reduce({ ...state }); // {...state} = real copy (current state)

      win.devTools.send(action, next);

      return next;
    });
  }

  dispatch(action: Action<any>) {
    this.actions.next(action);
  }

  getState(path: string) {
    return this.state;
  }
}
