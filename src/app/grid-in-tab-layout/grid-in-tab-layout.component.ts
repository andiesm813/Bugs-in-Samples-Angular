import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-grid-in-tab-layout',
  templateUrl: './grid-in-tab-layout.component.html',
  styleUrls: ['./grid-in-tab-layout.component.scss']
})
export class GridInTabLayoutComponent implements OnInit {
  public northwindEmployees: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
