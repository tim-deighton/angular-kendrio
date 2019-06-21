import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'select-tags',
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <label>Tagging Press enter to add item</label>
 
        <ng-select [items]="[]"
                   [addTag]="true"
                   [multiple]="true"
                   [selectOnTab]="true"
                   [isOpen]="false">
        </ng-select>
        ---
    `
})
export class SelectTagsComponent  extends FieldType  {

    loading = false;


    ngOnInit() {
    }
    addTag(name) {
        return { name: name, tag: true };
    }
}