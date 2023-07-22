import { Component, Input } from '@angular/core';
import {defaultColor} from "../form/form.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() block1Color: string = defaultColor;
  @Input() block2Color: string = defaultColor;
  @Input() block3Color: string = defaultColor;
}
