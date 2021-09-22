import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.scss']
})
export class ToDoListFormComponent implements OnInit {

  public toDoForm;
  @Input() editingItemNumber: number;

  @Output() addedItem = new EventEmitter<string>();


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.toDoForm = this.formBuilder.group({
      toDoItem: ['', Validators.required]
    });
  }
  onChanges(changes:SimpleChanges) {
    console.log(changes.editingItemNumber.currentValue)
  }

  onSubmit():void {
    this.addedItem.emit(this.toDoForm.get('toDoItem').value);
  }

}
