import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  dataPath = "http://127.0.0.1:8000";

  constructor(private http: HttpClient) { }

  getList(): any {
    // return this.http.get('../../assets/list.json');
    return this.http.get(this.dataPath + "/to-do-items");
  }

  addItem(params: any): any {
    return this.http.post(this.dataPath + "/to-do-items/", params);
  }

  editItem(i: number, newName: string): any {
    console.log('you are ins ervice method');
    //patch to url
  }

  deleteItem(index: number): any {
    //delete method to url
  }

  deleteAllItems(): any {
    console.log('aaa');
    return this.http.delete(this.dataPath + "/to-do-items");
  }

}
