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
    firstName: 'Chucky',
    lastName: 'Norris',
    age: 75,
    bio: 'Roundhouse kicking asses since 1940',
    password: 'noneed',
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [this.formlyJsonschema.toFieldConfig(
this.getJSONSchema()
  )];
  constructor(private formlyJsonschema: FormlyJsonschema) {}

getJSONSchema() {

return     {
    'title': 'A registration form',
    'description': 'A simple form example.',
    'type': 'object',
    'required': [
      'firstName',
      'lastName',
    ],
    'properties': {

            "captain1": {
        "title": "Title",
        "description": "Look we have a description",
        "type": "string",
        "enum": [ "El Stinko",
                  "Bongo Doctor",
                  "Witch Hunter General",
                  "Where am I" ]
      },
      'firstName': {
        'type': 'string',
        'title': 'First name',
      },
      'lastName': {
        'type': 'string',
        'title': 'Last name',
      },
            'country': {
        'type': 'typeahead',
        'title': 'Country',
           'items': {
          'type': 'string',
          'default': 'bazinga',
        },
      },
      'age': {
        'type': 'integer',
        'title': 'Age',
      },
              "simpleDate": {
            'title': 'a date value',
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
        'title': 'Telephone',
      
          'enum': [
            'foo',
            'bar',
            'fuzz',
            'qux',
          ],
  
      },
            'pay': {
        'type': 'money',
        'title': 'Income',
        'minLength': 10,
      },

 
    },
  }


}


  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */