import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  data: any;
  id:any;
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.queryParamMap.get("id");
      // console.log("id : ",this.id);
    }
  ngOnInit(): void {
    const temp = JSON.parse(localStorage.getItem('form_data')!);
    if(temp!=null && temp!=undefined){
      temp.forEach((ele)=>{
        if(ele.id == this.id){
          this.data = ele;
        }
      })
    }
    // this.data = temp![0];
    // console.log('data : ', this.data);
  }

  deleteData() {
    const item = this.data;
    var index = 0;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  approveData() {
    const item = this.data;
    Swal.fire({
      title: 'Do you want to delete this licence request',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.approveConfirmed(item);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  approveConfirmed(item) {
    const list = JSON.parse(localStorage.getItem('form_data')!);
    var index = 0;
    if (list != null && list != undefined) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == item.id) {
          index = i;
        }
      }
      list[index].status = 'approved';
      localStorage.setItem('form_data', JSON.stringify(list));
      Swal.fire('Successfully approved', '', 'success');
      console.log("updatedList : ",list);
    }
  }

  deleteConfirmed(item) {
    const list = JSON.parse(localStorage.getItem('form_data')!);

    if (list != null && list != undefined) {
      // for(let i=0;i<list.length;i++){
      //   if(list[i].id == item.id){
      //     index = i;
      //   }
      // }

      var listNew = list as [];
      // listNew.indexOf(item);
      console.log('listeNesw : ', listNew);
    }
    Swal.fire('deleted successfully!', '', 'success');
  }

  openGenerateCertificate(){
    this.router.navigateByUrl('admin/licence/certificate'+"?id="+this.data.id);
  }

  openEditPage(){
    this.router.navigateByUrl('admin/licence/edit'+"?id="+this.data.id);

  }
}
