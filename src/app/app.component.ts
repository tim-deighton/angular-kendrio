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
      'firstName': {
        'type': 'string',
        'title': 'First name',
      },
      'lastName': {
        'type': 'string',
        'title': 'Last name',
      },
      'age': {
        'type': 'integer',
        'title': 'Age',
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
        'type': 'string',
        'title': 'Telephone',
        'minLength': 10,
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