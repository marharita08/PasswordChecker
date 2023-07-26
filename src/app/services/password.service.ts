import { Injectable } from '@angular/core';
import {IGridState} from "../interfaces/grid.state";

enum Color {
  Red = '#ff6666',
  Green = '#99cc00',
  Grey = '#e6e6e6',
  Yellow = '#ffe066'
}

const defaultColor: string = Color.Grey;
export var defaultState: IGridState = new class implements IGridState {
  block1Color: string = defaultColor;
  block2Color: string = defaultColor;
  block3Color: string = defaultColor;
}

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private gridState: IGridState = defaultState;

  getGridState():IGridState {
    return this.gridState;
  }

  checkPassword(password: string): void {
    if (password.length == 0) {
      this.gridState.block1Color = Color.Grey;
      this.gridState.block2Color = Color.Grey;
      this.gridState.block3Color = Color.Grey;
    } else if (password.length < 8) {
      this.gridState.block1Color = Color.Red;
      this.gridState.block2Color = Color.Red;
      this.gridState.block3Color = Color.Red;
    } else {
      let hasLetters: boolean = this.hasLetters(password);
      let hasDigits: boolean = this.hasDigits(password);
      let hasSymbols: boolean = this.hasSymbols(password);
      if (hasLetters && hasDigits && hasSymbols) {
        this.gridState.block1Color = Color.Green;
        this.gridState.block2Color = Color.Green;
        this.gridState.block3Color = Color.Green;
      } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
        this.gridState.block1Color = Color.Yellow;
        this.gridState.block2Color = Color.Yellow;
        this.gridState.block3Color = Color.Grey;
      } else if (hasDigits || hasLetters || hasSymbols) {
        this.gridState.block1Color = Color.Red;
        this.gridState.block2Color = Color.Grey;
        this.gridState.block3Color = Color.Grey;
      }
    }
  }

  hasLetters(password: string): boolean {
    return /[a-zA-Zа-яієїґА-ЯІЄЇҐ]/.test(password);
  }

  hasDigits(password: string): boolean {
    return /\d/.test(password);
  }

  hasSymbols(password: string): boolean {
    return /[^a-zA-Zа-яієїґА-ЯІЄЇҐ0-9]/.test(password);
  }
}
