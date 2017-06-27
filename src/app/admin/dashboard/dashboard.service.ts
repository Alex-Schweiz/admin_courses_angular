import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  public infoBoxes = [
    {
      title: 'Current Courses',
      number: '8',
      icon: 'fa-graduation-cap',
    }, {
      title: 'Students',
      number: '85',
      icon: 'fa-users',
    }, {
      title: 'Teachers',
      number: '7',
      icon: 'fa-user',
    }, {
      title: 'Income in April',
      number: '$ 1200',
      icon: 'fa-bank',
    }];

  constructor() { }
  getInfoBoxes() {
    return this.infoBoxes;
  }
}
