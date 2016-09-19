import { Directive} from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import * as validator from 'validator';

export function isAlpha(c: AbstractControl) {
  return validator.isAlpha(c.value) ? null : {
    isAlpha: {
      valid: false
    }
  };
}

@Directive({
  selector: '[isAlpha][formControlName],[isAlpha][formControl],[isAlpha][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: isAlpha, multi: true }
  ]
})
export class AlphaValidator{}