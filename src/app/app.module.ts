import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ArrayTypeComponent } from './array.type';
import {FormlyFieldInputMoney} from './money.component.ts'
import { FormlyMaterialModule } from '@ngx-formly/material';



export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

@NgModule({
  imports: [
    BrowserModule,
    TextMaskModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'date',
            },
          },
        },
        { name: 'object', extends: 'formly-group' },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'array', component: ArrayTypeComponent },
              { name: 'money', component: FormlyFieldInputMoney },
        { name: 'enum', extends: 'select' },
      ],
    }),
  ],
    exports: [
    FormlyModule,
    FormlyMaterialModule ,  

  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ArrayTypeComponent,
    FormlyFieldInputMoney
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */