import { Component, OnInit } from '@angular/core';
import { Userdetail } from '../share/userdetail';
import { UserdetailService } from '../share/userdetail.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  
  userdetails:Userdetail[];
  userdet:Userdetail;
  constructor(private _uds:UserdetailService,
    private _router:Router) { }

    editUserDetail(userdetail: Userdetail) {
      console.log(userdetail);
      localStorage.removeItem('editUserId');
      localStorage.setItem('editUserId', userdetail.id.toString());
      this._router.navigate(['edit']);
      // this.ucs.update(usercontact);
    }

    deleteUserDetail(userdetail: Userdetail) {
      console.log(userdetail);
      this._uds.delete(userdetail);
    }  

  ngOnInit() {
    console.log('userdetail:init');
          this.userdetails = this._uds.getall();
          console.log(this.userdetails);
  }

}
