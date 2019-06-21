import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { KendraioFormService } from './ui-form/services/kendraio.form.service'

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    title: 'The Forest',
    lastName: 'Norris',
    description: 'Born in the morning in the drizzlin rain. Trouble is his middle name',
    videoUrl: 'https://www.youtube.com/embed/YA9N4nsAxZo'
  };
  formConfig: any;
  options: FormlyFormOptions = {};
  jsonSchema: any;
  uiSchema: any;
  fields: FormlyFieldConfig[]

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private formService: KendraioFormService
  ) {  
    this.getJSONSchema() 
  }

  getJSONSchema() {
    this.formService.getFormData('youtube')
      .subscribe(([uiSchema, jsonSchema]) => {
          this.formConfig = this.formlyJsonschema.toFieldConfig(jsonSchema);
          this.fields = [this.formService.uiMapper(this.formConfig, jsonSchema, uiSchema)];
              console.log(jsonSchema)
      });
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */