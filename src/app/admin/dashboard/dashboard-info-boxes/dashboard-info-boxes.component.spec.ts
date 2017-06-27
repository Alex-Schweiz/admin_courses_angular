import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfoBoxesComponent } from './dashboard-info-boxes.component';

describe('DashboardInfoBoxesComponent', () => {
  let component: DashboardInfoBoxesComponent;
  let fixture: ComponentFixture<DashboardInfoBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInfoBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInfoBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
