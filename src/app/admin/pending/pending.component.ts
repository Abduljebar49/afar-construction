import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss'],
})
export class PendingComponent implements OnInit {
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
        if(ele.status == 'pending')
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
  // Swal.fire({  
  //   title: 'Do you want to delete this pending?',  
  //   showDenyButton: true,  showCancelButton: true,  
  //   confirmButtonText: `Yes`,  
  //   denyButtonText: `No`,
  // }).then((result) => {  
  //   /* Read more about isConfirmed, isDenied below */  
  //     if (result.isConfirmed) {    
  //       Swal.fire('this operation is not allowed for now', '', 'success')  
  //     } else if (result.isDenied) {    
  //       Swal.fire('Changes are not saved', '', 'info')  
  //    }
  // });
}
