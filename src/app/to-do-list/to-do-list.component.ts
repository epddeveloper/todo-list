import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { ToDoItem } from './models/to-do-item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  title: string = 'To Do List';
  newItemName: string;

  ngOnInit() {

  }

  addItem(newItemName: string): void {
    this.newItemName =newItemName;
  }

  editItem(itemIndex: number) {
    return itemIndex;
  }

}
