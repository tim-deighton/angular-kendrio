import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AppComponent } from './app.component';
// import { TextMaskModule } from 'angular2-text-mask';
// import { ArrayTypeComponent } from './ui-form/types/array.type';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { UiFormModule } from './ui-form/ui-form.module';


@NgModule({
  imports: [
    BrowserModule,
    // TextMaskModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
    }),
    UiFormModule
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule,

  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    // ArrayTypeComponent
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */