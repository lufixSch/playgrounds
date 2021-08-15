import { Injectable } from '@angular/core';
import { StoreService } from '../store.service';
import { CreateAction, DeleteAction, UpdateAction } from '../actions/crud.actions';
import { ToDo } from '../types/todo.types';
import { Meta } from '../actions/meta';

@Injectable({
  providedIn: 'root'
})
export class ToDoActionCreatorService {
  constructor(private Store: StoreService) {}

  createToDo(data: ToDo, source: Meta['source']) {
    const id = String(Math.floor(Math.random() * 100));
    const action = new CreateAction('ToDo', { id, data }, { target: '', source });
    this.Store.dispatch(action);
  }

  updateToDo(id: string, data: Partial<ToDo>, source: Meta['source']) {
    const action = new UpdateAction('ToDo', { id, data }, { target: '', source });
    this.Store.dispatch(action);
  }

  deleteToDo(id: string, source: Meta['source']) {
    const action = new DeleteAction('ToDo', { id }, { target: '', source });
    this.Store.dispatch(action);
  }

  toggleToDo(id: string, done: boolean, source: Meta['source']) {
    const action = new UpdateAction('toggle_ToDo', { id, data: { done } }, { target: '', source });
    this.Store.dispatch(action);
  }
}
