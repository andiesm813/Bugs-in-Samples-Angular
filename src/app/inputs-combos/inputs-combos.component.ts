import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs-combos',
  templateUrl: './inputs-combos.component.html',
  styleUrls: ['./inputs-combos.component.scss']
})
export class InputsCombosComponent {
  public value = 'With content';
  public value1 = 'Disabled';
  public date: any;
  public date1 = new Date('2023-03-08T00:00');
}
