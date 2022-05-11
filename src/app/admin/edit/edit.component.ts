import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }
  form = new FormGroup({});
  model: any = {
    education: [{}],
    id: 1,
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  ngOnInit(): void {
    this.fields = [
      {
        fieldGroupClassName: 'mt-3 row',
        fieldGroup: [
          {
            type: 'select',
            key: 'applaidFor',
            className: 'col-6',
            templateOptions: {
              label: 'Applaid For',
              required: true,
              options: [
                {
                  value: 'Contruction',
                  label: 'Contruction',
                },
                {
                  value: 'Design',
                  label: 'Design',
                },
              ],
            },
          },
          {
            type: 'select',
            key: 'typeOfRegistration',
            className: 'col-6',
            templateOptions: {
              label: 'Type Of Registration',
              required: true,
              options: [
                {
                  value: 'New Registration',
                  label: 'New Registration',
                },
                {
                  value: 'Renew',
                  label: 'Renew',
                },
                {
                  value: 'Upgrading',
                  label: 'Upgrading',
                },
              ],
            },
          },
          {
            type: 'input',
            key: 'name',
            className: 'col-6',
            templateOptions: {
              required: true,
              label: 'Name',
              input: 'text',
            },
          },
          {
            type: 'select',
            key: 'sex',
            className: 'col-6',
            templateOptions: {
              label: 'Sex',
              required: true,
              options: [
                {
                  value: 'Male',
                  label: 'Male',
                },
                {
                  value: 'Female',
                  label: 'Female',
                },
              ],
            },
          },
          // <hr />
          {
            className: 'section-label',
            template: '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-6',
                type: 'input',
                key: 'city',
                templateOptions: {
                  label: 'City',
                },
              },
              {
                className: 'col-6',
                type: 'input',
                key: 'woreda',
                templateOptions: {
                  label: 'woreda',
                },
              },
            ],
          },
          {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                className: 'col-4',
                type: 'input',
                key: 'kebele',
                templateOptions: {
                  type: 'text',
                  label: 'Kebele',
                },
              },
              {
                className: 'col-4',
                type: 'input',
                key: 'houseNumber',
                templateOptions: {
                  type: 'text',
                  label: 'House Number',
                },
              },
              {
                className: 'col-4',
                type: 'input',
                key: 'telPhone',
                templateOptions: {
                  type: 'text',
                  label: 'Tel No',
                },
              },
            ],
          },
          {
            className: 'section-label',
            template:
              '<div class="mt-2 mb-2"><strong>Ecucational Data:</strong></div>',
          },
          {
            key: 'education',
            type: 'repeat',
            // className:'row',

            templateOptions: {
              addText: 'Add Education',
            },
            fieldArray: {
              // className:'row',
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  key: 'educationalInstitution',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Educational Institution',
                    required: true,
                  },
                },
                {
                  key: 'fieldOfStudy',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Field of study',
                    required: true,
                  },
                },
                {
                  key: 'professionalTitle',
                  type: 'select',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'Professional title',
                    required: true,
                    options: [
                      {
                        value: 'certificate',
                        label: 'Certificate',
                      },
                      {
                        value: 'diploma',
                        label: 'Diploma',
                      },
                      {
                        value: 'degree',
                        label: 'Degree',
                      },
                    ],
                  },
                },
                {
                  key: 'dateRecieved',
                  type: 'input',
                  className: 'col-6 mt-1',
                  templateOptions: {
                    label: 'dateRecieved',
                    type: 'date',
                    required: true,
                  },
                },
              ],
            },
          },
        ],
      },
    ];
    const temp = JSON.parse(localStorage.getItem('form_data')!);

    var data;
    if (temp != null && temp != undefined) {
      temp.forEach((ele) => {
        if (ele.id == this.id) {
          data = ele;
        }
      });
    }

    this.model = {
      applaidFor: data.applaidFor,
      education: data.education,
      typeOfRegistration: data.typeOfRegistration,
      kebele: data.kebele,
      name: data.name,
      city: data.city,
      houseNumber: data.houseNumber,
      sex: data.sex,
      telPhone: data.telPhone,
      woreda: data.woreda,
    };
    // console.log('this.model : ', this.model);
  }

  submit() {
    if (this.form.valid) {
      console.log('valid submitted data : ', this.model);
    }
  }
}
