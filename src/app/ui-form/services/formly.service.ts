import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field } from '../helpers/fields';
import { DEFAULT_FORM } from '../schemas/default.form';
import { LOGIN_FORM } from '../schemas/login.form';
import { FORMS_VALUES } from '../schemas';
import { HttpClient } from '@angular/common/http';

import { FULLNAME, EMAIL, TYPEAHEAD } from '../schemas/form-elements';
import { Observable, from, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormlyService {
  constructor(private http: HttpClient) { }


    getFormData(formId): Observable<any> {
    return forkJoin([this.getUI(formId), this.getSchema(formId)]);
  }

  getUI(formId: String) {
    return this.http.get('assets/you-tube-ui.json');
  }

  getSchema(formId: string): Observable<any> {
      // alert(JSON.stringify('../assets/youtube.json'))
   return this.http.get<FormlyFieldConfig[]>('assets/youtube.json');
  }

  // public getFormById(id: string, disabled = false, data?: object) {
  //   const ob = FORMS_VALUES(disabled, data)[id];
  //   console.log(ob)
  //   return ob;
  // }

  // public getJSONFormById(id: string, disabled = false, data: any = {}) {
  //   const frm = this.generateCleanJsonConfiguration(FORMS_VALUES(disabled, data)[id]);
  //   return  frm;
  // }

  // private generateCleanJsonConfiguration(clone: object[]) {  // use this to create JSON config ??? maybe??
  //   return JSON.parse(JSON.stringify(clone));
  // }

  // getYoutubeData() {
  //   return this.http.get<FormlyFieldConfig[]>('assets/fake-data/you-tube-api.json');
  // }

  // getYoutubeFields() {

  //   const mappedFields = [
  //     { 'field': 'FULLNAME', 'enabled': false },
  //     { 'field': 'EMAIL', 'enabled': false },
  //   ];

  //   const myFields = [
  //     // FULLNAME(false, data['fullname']),
  //     // EMAIL(false, data['email']),
  //   ];

  //   mappedFields.forEach(v => {
  //     const fname = v.field;


  //     //  myFields.push(

  //         console.log(v[fname](false, {
  //           'id': 'YOUTUBE',
  //           'fullname': 'Bernie Winters',
  //           'email': 'bernie@heaven.com'
  //       }));

  //       //  [fname](false, data['fullname'])


  //    //   );


  //   });

  // }



}
