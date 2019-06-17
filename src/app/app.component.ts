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
 this.getMe()
  )];

  constructor(private formlyJsonschema: FormlyJsonschema) {}

getMe() {
  return    {
    'title': 'A list of tasks',
    'type': 'object',
    'required': [
      'title',
    ],
    'properties': {
      'title': {
        'type': 'money',
        'title': 'Task list title',
      },
           'test': {
        'type': 'integer',
        'title': 'Test',
      },
      'tasks': {
        'type': 'array',
        'title': 'Tasks',
        'items': {
          'type': 'object',
          'required': [
            'title',
          ],
          'properties': {
            'title': {
              'type': 'string',
              'title': 'Title',
              'description': 'A sample title',
            },
            'details': {
              'type': 'string',
              'title': 'Task details',
              'description': 'Enter the task details',
            },
            'done': {
              'type': 'boolean',
              'title': 'Done?',
              'default': false,
            },
          },
        },
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