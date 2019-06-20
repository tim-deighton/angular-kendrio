import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import {FormlyService} from './ui-form/services/formly.service'

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
  options: FormlyFormOptions = {};
  jsonSchema = this.getJSONSchema()
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

  formlyConfig = this.formlyJsonschema.toFieldConfig(this.jsonSchema);

  fields: FormlyFieldConfig[] = [this.uiMapper(this.formlyConfig, this.jsonSchema, this.uiSchema)];
  constructor(private formlyJsonschema: FormlyJsonschema,
  formService: FormlyService) { }

  getJSONSchema() {


    return {
      'title': 'A registration form',
      'description': 'A simple form example.',
      'type': 'object',
      'required': [
        'firstName',
        'isdn',
        'claim'
      ],
      'properties': {

        "artist": {
          "title": "Artist",
          "description": "Please select your Artist",
          "type": "string",
          "enum": ["David Boxie",
            "The Clash",
            "Sex Pistols",
            "The Fall"]
        },
        'firstName': {
          'type': 'string',
          'title': 'Record Label',
        },
        'isdn': {
          'type': 'string',
          'title': 'ISDN',
        },
        'country': {
          'type': 'typeahead',
          'title': 'Region',
          'items': {
            'type': 'string',
            'default': 'bazinga',
          },
        },
        'age': {
          'type': 'number',
          'title': 'View Count',
        },
        "simpleDate": {
          'title': 'Release Date',
          'type': 'datepicker',
        },
        'bio': {
          'type': 'textarea',
          'title': 'Bio',
        },
        'password': {
          'type': 'string',
          'title': 'Password',
          'minLength': 3,
        },
        'telephone': {
          'type': 'radio',
          'title': 'Genre',
          'enum': [
            'Punk',
            'Reggea',
            'Soul',
            'Jazz',
          ],
        },
        'pay': {
          'type': 'money',
          'title': 'Income',
          'minLength': 10,
          "description": "(Less is more)",
        },
        'claim': {
          'type': 'percentage',
          'title': 'Claim Share',
        },


      },
    }


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