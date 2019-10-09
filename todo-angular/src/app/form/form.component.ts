import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todo = new Todo();

  @Output() todoChange = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.todoChange.emit({...this.todo});
  }
}
