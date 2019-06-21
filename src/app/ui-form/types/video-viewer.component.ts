import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'formly-field-video-viewer',
  template: `

 
     <mat-label>  {{ to.label }} </mat-label>
<iframe width="560" height="315" src="{{ to.label }}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <mat-error>OOPS</mat-error>
     <mat-hint></mat-hint>


 `,
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldVideoViewer extends FieldType {
}


