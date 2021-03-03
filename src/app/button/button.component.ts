import { Component, OnInit } from '@angular/core';
import {CarServiceService} from '../car-service.service';
import {Car} from '../models/Car';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  car: Car;
  constructor( private carService: CarServiceService) {
    this.car = {id: 0, mark: '', model : '', colour: 'b'};
  }
  ngOnInit(): void {
  }

  onClick(): void {
    let resp = this.carService.getCar();
    resp.subscribe((data) => {
      this.car = data as Car;
      alert('Car after! \n' +
        'car id: ' + this.car.id + '\n' +
        'car mark: ' + this.car.mark + '\n' +
        'car model: ' + this.car.model + '\n' +
        'car color: ' + this.car.colour + '\n');
    });
  }

}
