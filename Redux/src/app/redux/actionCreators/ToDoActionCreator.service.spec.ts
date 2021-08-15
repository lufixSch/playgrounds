/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoActionCreatorService } from './ToDoActionCreator.service';

describe('Service: ToDoActionCreator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoActionCreatorService]
    });
  });

  it('should ...', inject([ToDoActionCreatorService], (service: ToDoActionCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
