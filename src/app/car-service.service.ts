import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  baseUrl: string;
  constructor(private httpClient: HttpClient){
    this.baseUrl="https://localhost:8080/cars/3";
  }

  getCar(){
    this.httpClient.get(this.baseUrl);
  }
  
}
