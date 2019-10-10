import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /*
  Exercice :
  Envoyer un requete GET vers
  https://jsonplaceholder.typicode.com/todos
  Transformer les résultats si besoin pour matcher
  votre format de données ex :
  this.todos = todos
    .map((c) => ({id: c.id, text: c.title, completed: c.completed}));
  */

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

  newTodo = new Todo();

  add(todo: Todo) {
    this.todos = [todo, ...this.todos]; // Changement immuable
    // this.todos.unshift(todo); // Changement muable
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo); // Changement immuable
  }
}
