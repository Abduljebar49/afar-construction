import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  selected:string = "dashboard";
  menuArray=[
    {
      name:'dashboard',
    },{
      name:'approved',
    },{
      name:'pending',
    }
  ]
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
  ) { 
    var temp = activatedRoute.snapshot.children[0].routeConfig?.path;
    if(temp!=null || temp!= undefined){
      var isExist = false;
      this.menuArray.forEach((data)=>{
        if(data.name == temp){
          isExist = true;
        }
      })
      if(isExist){
        this.selected = temp;
      }
    }
    console.log("temp ",temp);
  }

  ngOnInit(): void {
  }

  changeSelected(val:string){
    this.selected = val;     
    if(val=='dashboard'){
      this.router.navigateByUrl(`admin`);
    }else{
      this.router.navigateByUrl(`admin/${val}`);
    }
    var temp = this.activatedRoute.queryParams;
    console.log("temp ",temp);

  }

}
