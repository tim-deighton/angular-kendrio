import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { FormlyService } from './ui-form/services/formly.service'

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    firstName: 'Yellow Lorry',
    lastName: 'Norris',
    age: 75,
    bio: 'Born in the morning in the drizzlin rain. Trouble is his middle name',
    password: 'noneed',
  };
  formlyConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[]

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private formlyService: FormlyService
  ) {  
    this.getJSONSchema() 
  }

  getJSONSchema() {

    this.formlyService.getFormData('youtube')
      .subscribe(([uiSchema, jsonSchema]) => {
          this.formlyConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formlyService.uiMapper(this.formlyConfig, jsonSchema, uiSchema)];
      });
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */