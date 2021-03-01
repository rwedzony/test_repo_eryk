import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-above-header',
  templateUrl: './above-header.component.html',
  styleUrls: ['./above-header.component.scss']
})
export class AboveHeaderComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor() { }

  ngOnInit(): void {
  }

}
