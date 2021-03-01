import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveHeaderComponent } from './above-header.component';

describe('AboveHeaderComponent', () => {
  let component: AboveHeaderComponent;
  let fixture: ComponentFixture<AboveHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
