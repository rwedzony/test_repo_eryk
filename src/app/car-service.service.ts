import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  baseUrl: string;
  constructor(private httpClient: HttpClient){
    this.baseUrl = '/assets/data/car.json';
  }
  getCar() {
    return this.httpClient.get(this.baseUrl);
  }
}
