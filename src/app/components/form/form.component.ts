import {Component, OnInit} from '@angular/core';
enum Color {
  Red = '#ff6666',
  Green = '#99cc00',
  Grey = '#e6e6e6',
  Yellow = '#ffe066'
}
export var defaultColor: string = Color.Grey;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  block1Color: string = defaultColor;
  block2Color: string = defaultColor;
  block3Color: string = defaultColor;
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(): void {
    if (this.password.length == 0) {
      this.block1Color = Color.Grey;
      this.block2Color = Color.Grey;
      this.block3Color = Color.Grey;
    } else if (this.password.length < 8) {
      this.block1Color = Color.Red;
      this.block2Color = Color.Red;
      this.block3Color = Color.Red;
    } else {
      let hasLetters: boolean = this.hasLetters();
      let hasDigits: boolean = this.hasDigits();
      let hasSymbols: boolean = this.hasSymbols();
      if (hasLetters && hasDigits && hasSymbols) {
        this.block1Color = Color.Green;
        this.block2Color = Color.Green;
        this.block3Color = Color.Green;
      } else if (hasLetters && hasDigits || hasLetters && hasSymbols || hasDigits && hasSymbols) {
        this.block1Color = Color.Yellow;
        this.block2Color = Color.Yellow;
        this.block3Color = Color.Grey;
      } else if (hasDigits || hasLetters || hasSymbols) {
        this.block1Color = Color.Red;
        this.block2Color = Color.Grey;
        this.block3Color = Color.Grey;
      }
    }
  }

  hasLetters(): boolean {
    return /[a-zA-Zа-яієїґА-ЯІЄЇҐ]/.test(this.password);
  }

  hasDigits(): boolean {
    return /\d/.test(this.password);
  }

  hasSymbols(): boolean {
    return /[^a-zA-Zа-яієїґА-ЯІЄЇҐ0-9]/.test(this.password);
  }
}
