import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainChartComponent } from './rain-chart.component';

describe('RainChartComponent', () => {
  let component: RainChartComponent;
  let fixture: ComponentFixture<RainChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainChartComponent]
    });
    fixture = TestBed.createComponent(RainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
