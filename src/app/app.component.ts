import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

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
    "lastName": {
      "ui:disabled": true
    }
  };

  // fields: FormlyFieldConfig[] = [this.formlyJsonschema.toFieldConfig(
  //   this.getJSONSchema()
  // )];

    formlyConfig = this.formlyJsonschema.toFieldConfig(this.jsonSchema);

  fields: FormlyFieldConfig[] = [this.uiMapper(this.formlyConfig, this.jsonSchema)];
  constructor(private formlyJsonschema: FormlyJsonschema) { }

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

        "captain1": {
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
    uiMapper(formlyConfig, jsonSchema) {
    console.log(formlyConfig);

// for (let index = this.jsonSchema.properties; index <= this.queNumMax; index++) {
//          this.result = index
//          console.log( this.result);
//      }
//   return items;

Object.keys(jsonSchema.properties).forEach(function(key) {

  

  console.log(key);

});

  //   this.jsonSchema.properties.forEach((item, index) => {
  //   for (let field of this.jsonSchema.properties) {
  //  console.log( field);
  //     }


    // Make changes to the formlyConfig based on the configuration from this.uiSchema
    // formlyConfig
    // ['fieldGroup'][0]['templateOptions']['disabled'] = true;
      //  ['fieldGroup'][2]['templateOptions']['disabled'] = true;
//  console.log(formlyConfig);
    return formlyConfig;
  }


  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */