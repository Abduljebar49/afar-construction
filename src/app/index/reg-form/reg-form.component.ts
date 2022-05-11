import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss'],
})
export class RegFormComponent implements OnInit {
  type: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.type = activatedRoute.snapshot.queryParamMap.get('type') ?? '';
  }

  ngOnInit(): void {
    if (this.type == 'professional') {
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
              template:
                '<div class="mt-2 mb-2"><strong>Address:</strong></div>',
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
    } else {
      console.log("inside else");
      this.fields = [
        {
          type: 'tabs',
          fieldGroup: [
            {
              templateOptions: { label: 'Personal data' },
              fieldGroup: [
                {
                  key: 'firstname',
                  type: 'input',
                  templateOptions: {
                    label: 'First name',
                    required: true,
                  },
                },
                {
                  key: 'age',
                  type: 'input',
                  templateOptions: {
                    type: 'number',
                    label: 'Age',
                    required: true,
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Destination' },
              fieldGroup: [
                {
                  key: 'country',
                  type: 'input',
                  templateOptions: {
                    label: 'Country',
                    required: true,
                  },
                },
              ],
            },
            {
              templateOptions: { label: 'Day of the trip' },
              fieldGroup: [
                {
                  key: 'day',
                  type: 'input',
                  templateOptions: {
                    type: 'date',
                    label: 'Day of the trip',
                    required: true,
                  },
                },
              ],
            },
          ],
        },
      ];
    }
  }

  form = new FormGroup({});
  model: any = {
    education: [{}],
    id:1,
    status:'pending',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  submit() {
    if (this.form.valid) {
      // alert(JSON.stringify(this.model));
      // Swal.fire('Registered',"Successfully Registered",'success');
      var items = JSON.parse(localStorage.getItem('form_data')!);
      console.log("items ; ",items);

      if(items==null && items==undefined){
        var data:any[] = [];
        data.push(this.model);
        localStorage.setItem('form_data',JSON.stringify(data));
      }else{
        var num = Math.random()*1000;
        var isExist = false;
        items.forEach((ele)=>{
          if(ele.id== num){
            isExist = true;
          }
        })
        if(!isExist){
          this.model.id = parseInt(num.toString());
          console.log("model : ",this.model);

          items.push(this.model);
          localStorage.setItem('form_data',JSON.stringify(items));
        }
      }
      Swal.fire('Registered',"Successfully Registered",'success');
    }
  }

  // private buildGroups(response: any) {
  //   return response.reduce(
  //     (obj: any, value: any) => ({
  //       ...obj,
  //       [value.group]: [
  //         ...(obj[value.group] || []),
  //         { key: value.name, value: value.name },
  //       ],
  //     }),
  //     {}
  //   );
  // }
  // private buildFields(groups: any) {
  //   return (<any>Object)
  //     .entries(groups)
  //     .map(([key, value]: [string, string]) => ({
  //       type: 'multicheckbox',
  //       key,
  //       templateOptions: {
  //         label: key,
  //         options: value,
  //       },
  //     }));
  // }

  public getCapitalizedTitle(type: string) {
    var charAt = type.charAt(0).toUpperCase();
    return charAt + type.substring(1, type.length);
  }
}
