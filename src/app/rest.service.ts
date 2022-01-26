import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  public get (url:string, body:object){
    return this.http.get(url, body) //Get api https://localhost:44350/api/TextCount
  }
}
