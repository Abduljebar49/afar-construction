import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
  <mat-tab-group>
    <mat-tab *ngFor="let tab of field.fieldGroup; let i = index; let last = last;"
      [label]="tab?.templateOptions?.label!"
      >
      <formly-field [field]="tab"></formly-field>
      <div class="justify-content-end text-end m-2">
        <button *ngIf="last" class="btn btn-primary" [disabled]="!form?.valid" type="submit">    
        Submit
        </button>
      </div>
      </mat-tab>
      </mat-tab-group>
      `,
    })
    // [disabled]="i !== 0 && !isValid(field?.fieldGroup[0])">
export class FormlyFieldTabs extends FieldType {
  isValid(field?: FormlyFieldConfig,num?:number) {
    console.log("field : ",field, "  num  : ",num);
    if (field?.key) {
      return field?.formControl!.valid!;
    }

    return field?.fieldGroup
      ? field?.fieldGroup.every((f) => this.isValid(f))
      : true;
  }
}