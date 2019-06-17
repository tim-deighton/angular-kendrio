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
    'title': 'My current tasks',
    'tasks': [
      {
        'title': 'My first task',
        'details': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'done': true,
      },
      {
        'title': 'My second task',
        'details': 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        'done': false,
      },
    ],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [this.formlyJsonschema.toFieldConfig(
 this.getMeForm()
  )];

  constructor(private formlyJsonschema: FormlyJsonschema) {}

getMeForm() {
  return    {
    'title': 'A registration form',
    'description': 'A simple form example.',
    'type': 'object',
    'required': [
      'lastName',
    ],
    'properties': {
      'firstName': {
        'type': 'string',
        'title': 'First name',
        'required': 'true'
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
        'type': 'string',
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