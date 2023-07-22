import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(): void {
    console.log(this.password);
  }
}
