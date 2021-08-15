import { Component } from '@angular/core';
import { ToDoActionCreatorService } from './redux/actionCreators/ToDoActionCreator.service';
import { StoreService } from './redux/store.service';
import { ToDo } from './redux/types/todo.types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-demo';
  input: string;

  data: Observable<any>;

  constructor(private actionCreator: ToDoActionCreatorService, private Store: StoreService) {
    this.data = this.Store.getState('').pipe(
      map(state => {
        const next = [];

        for (const id in state) {
          if (state.hasOwnProperty(id)) {
            const element = state[id];

            next.push({ ...element, id });
          }
        }

        return next;
      })
    );
  }

  onCreate() {
    console.log('create Element');

    const todo: ToDo = {
      task: this.input,
      done: false
    };

    this.actionCreator.createToDo(todo, 'client');

    this.input = '';
  }

  onDone(id: string, done: boolean) {
    this.actionCreator.toggleToDo(id, !done, 'client');
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onCreate();
    }
  }

  onDelete(id: string) {
    this.actionCreator.deleteToDo(id, 'client');
  }
}
