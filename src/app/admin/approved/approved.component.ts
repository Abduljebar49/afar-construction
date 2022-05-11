import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {
  allUsers: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: AdminService, private router: Router) {}

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true
    // };
    // this.users();
    var items = JSON.parse(localStorage.getItem('form_data')!);

    if (items != null && items != undefined) {
      var data:any[] = [];
      items.forEach((ele)=>{
        if(ele.status == 'approved')
        {
          data.push(ele);
        }
      })
      this.allUsers =data;
    } else {
      this.allUsers = [];
    }
    console.log('allUsers : ', this.allUsers);
  }

  // users(): void {
  //   this.service.users().subscribe((response: any) => {
  //     console.log("response from http client : ",response)
  //     this.allUsers = response;
  //   });
  // }
  users(): void {
    this.service.users().subscribe((response: any) => {
      this.allUsers = response;
      // initiate our data table
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openDetail(item,type) {
    if (type == 'view' || type == 'edit') {
      this.router.navigateByUrl('admin/licence/'+type+"?id="+item.id);
    }
  }
}
