import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer',
  template: `

 
 xxx{{ to | json }}xxx



<iframe class="e2e-iframe-trusted-src" width="640" height="390" [src]="videoUrl"></iframe>
    <input  type="text"  [textMask]="{mask: numberMask}" [formControl]="formControl" [formlyAttributes]="field">


 `,
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldVideoViewer extends FieldType {
  constructor(
   private sanitizer: DomSanitizer
    ) {
      super()
    }



innerHTML: string =  "<iframe width='560' height='315' src='https://www.youtube.com/embed/YA9N4nsAxZo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
videoUrl: any  = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YA9N4nsAxZo');

// updateVideoUrl(id: string) {
  // Appending an ID to a YouTube URL is safe.
  // Always make sure to construct SafeValue objects as
  // close as possible to the input data so
  // that it's easier to check if the value is safe.
 // this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
// videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YA9N4nsAxZo');

//  }


}


