import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {PasswordService} from "../../services/password.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  password: string = '';

  constructor(private passwordService: PasswordService) {
  }

  private onChange: any = (password: string) => {};
  private onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj !== this.password) {
      this.password = obj || '';
    }
  }

  onBlur() {
    this.onTouched();
  }

  onInputChange(event: any) {
    this.password = event.target.value;
    this.onChange(this.password);
    this.passwordService.checkPassword(this.password);
  }
}
