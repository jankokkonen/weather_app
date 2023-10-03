import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureChartComponent } from './temperature-chart.component';

describe('TemperatureChartComponent', () => {
  let component: TemperatureChartComponent;
  let fixture: ComponentFixture<TemperatureChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureChartComponent]
    });
    fixture = TestBed.createComponent(TemperatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
