import {Component, OnInit} from '@angular/core';
import {IGridState} from "../../interfaces/grid.state";
import {defaultState} from "../../services/password.service";
import {PasswordService} from "../../services/password.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridState: IGridState = defaultState;

  constructor(private passwordService:PasswordService) {
  }

  ngOnInit() {
    this.gridState = this.passwordService.getGridState();
  }
}
