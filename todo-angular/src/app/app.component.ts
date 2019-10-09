import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{
    id: 123,
    text: 'Pain',
    completed: false,
  }, {
    id: 234,
    text: 'Lait',
    completed: true,
  }, {
    id: 456,
    text: 'Beurre',
    completed: false,
  }];

  add(todo: Todo) {
    this.todos = [...this.todos, todo]; // Changement immuable
    // this.todos.unshift(todo); // Changement muable
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}
