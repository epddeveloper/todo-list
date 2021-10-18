import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { ToDoItem } from 'src/app/models/to-do-item.model';


@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.scss']
})
export class ToDoListFormComponent implements OnInit {

  public toDoForm;
  id: string;
  isAddMode: boolean;
  toDoItems: any;

  @Input() editingItemNumber: number;

  @Output() addedItem = new EventEmitter<string>();
  @Output() editedItem = new EventEmitter<any>();



  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private listService: ListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.isAddMode = !this.id;

      this.listService.getList().subscribe(response => {
        this.toDoItems = response;
        this.toDoItems.splice([this.id], 1);
        console.log(this.toDoItems);

        if (!this.isAddMode) {
          this.toDoForm.patchValue({
            toDoItem: this.toDoItems[this.id].item_name
          });
        }
      });
    })

    this.toDoForm = this.formBuilder.group({
      toDoItem: ['', Validators.required]
    });
  }

  onChanges(changes: SimpleChanges) {
    console.log(changes.editingItemNumber.currentValue)
  }

  onSubmit(): void {
    if (this.isAddMode) {
      this.addedItem.emit(this.toDoForm.get('toDoItem').value);
    } else {
      this.editedItem.emit({ 'id': this.id, 'name': this.toDoForm.get('toDoItem').value });
    }
  }

}
