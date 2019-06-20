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
  uiSchema = {
    "artist": {
      "ui:disabled": false,
      "ui:placeholder": 'Enter the Artist'
    },
    "firstName": {
      "ui:disabled": true,
      "ui:placeholder": 'Enter your First Name'
    }
    ,
    "isdn": {
      "ui:placeholder": 'Enter your ISDN'
    }
  };

  // fields: FormlyFieldConfig[] = [this.formlyJsonschema.toFieldConfig(
  //   this.getJSONSchema()
  // )];



  fields: FormlyFieldConfig[]
  //  = [this.uiMapper(this.formlyConfig, this.jsonSchema, this.uiSchema)];
  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private formlyService: FormlyService
  ) {  
    this.getJSONSchema() 
  }

  getJSONSchema() {
alert()

    this.formlyService.getSchema('youtube')
      .subscribe(newValue => {

        this.jsonSchema = newValue;
          this.formlyConfig = this.formlyJsonschema.toFieldConfig(this.jsonSchema);
          this.fields = [this.uiMapper(this.formlyConfig, this.jsonSchema, this.uiSchema)];

      });


    // this.formService.getSchema('youtube')
    //   .subscribe((res: any) => {
    //     return res;
    //   });

  }

  uiMapper(formlyConfig, jsonSchema, uiSchema) {
    console.log(formlyConfig);
    let i = 0
    Object.keys(jsonSchema.properties).forEach(function (key) {
      console.log(key, jsonSchema.properties[key]);
      Object.keys(uiSchema).forEach(function (uiKey) {
        if (uiKey === key) {
          console.log('match: ' + uiSchema[key]['ui:disabled']);
          formlyConfig['fieldGroup'][i]['templateOptions']['disabled'] = uiSchema[key]['ui:disabled'];
          formlyConfig['fieldGroup'][i]['templateOptions']['placeholder'] = uiSchema[key]['ui:placeholder'];
        }
      });
      i++
    })
    console.log(formlyConfig);
    return formlyConfig;
  }


  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */