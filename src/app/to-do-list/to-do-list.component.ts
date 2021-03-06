import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { ToDoItem } from '../models/to-do-item.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  title: string = 'To Do List';
  newItemName: string;
  editedItemToPatch: any;

  ngOnInit() {

  }

  addItem(newItemName: string):any {
    return this.newItemName = newItemName;
  }

  patchItem(editedItemToPatch: string):any {
    console.log(editedItemToPatch);
    return this.editedItemToPatch = editedItemToPatch;
  }

  editItem(itemIndex: number):any {
    console.log(itemIndex);
    return itemIndex;
  }

}
