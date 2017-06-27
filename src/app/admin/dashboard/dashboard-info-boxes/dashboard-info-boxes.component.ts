import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-info-boxes',
  templateUrl: './dashboard-info-boxes.component.html',
  styleUrls: ['./dashboard-info-boxes.component.css']
})
export class DashboardInfoBoxesComponent implements OnInit {

  @Input() infoBox;
  constructor() { }

  ngOnInit() {
  }

}
