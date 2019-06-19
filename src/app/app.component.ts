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
    bio: 'Roundhouse kicking  since 1940',
    password: 'noneed',
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [this.formlyJsonschema.toFieldConfig(
    this.getJSONSchema()
  )];
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
        },
                'claim': {
          'type': 'percentage',
          'title': 'Claim Share',
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