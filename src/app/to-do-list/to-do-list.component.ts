import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  title: string = 'To Do List';
  newItem:string;
  


  ngOnInit() {

  }

  addItem(newItem: string):void {
    // console.log(newItem);
    this.newItem = newItem;
  }

  editItem(itemIndex:number){
    return itemIndex;
  }

}
