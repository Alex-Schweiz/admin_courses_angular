import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit {
  public pageTitle = 'Welcome to English courses dashboard';
  public infoBoxes;
  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    this.getInfoBoxes();
  }
  getInfoBoxes() {
    this.infoBoxes = this._dashboardService.getInfoBoxes();
  }

}
