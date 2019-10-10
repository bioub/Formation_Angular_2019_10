import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Output() delete = new EventEmitter<Todo>();
  @Input() item: Todo;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('check item');
  }

}
