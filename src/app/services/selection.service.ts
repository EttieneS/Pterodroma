import { Injectable } from '@angular/core';
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = "http://localhost:5038/api/selection/";

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  constructor() { }

  create(data: any) {
    console.log("table data " + data);
    //return this.http.post(baseURL + 'add', data).subscribe(response => console.log(response));
  }
}
