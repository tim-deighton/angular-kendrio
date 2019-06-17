import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


@Component({
  selector: 'formly-field-input-money',
  template: `


     <input  type="text"  [textMask]="{mask: numberMask}" [formControl]="formControl" [formlyAttributes]="field">


 `,
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldInputMoney extends FieldType {
  public numberMask = createNumberMask({
    prefix: '£ ',
    allowDecimal: true
  });
}
