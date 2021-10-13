import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  dataPath = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  //add type, not any
  getList() {
    // return this.http.get('../../assets/list.json');
    return this.http.get(`$dataPath/o-do-items`);
  }

  addItem() {
      //post to url
  }

  editItem(i: number,newName:string) {
    console.log('you are ins ervice method');
    //patch to url
  }

  deleteItem(index: number) {
    //delete method to url
  }

}
