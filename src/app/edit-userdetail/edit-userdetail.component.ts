import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdetailService } from '../share/userdetail.service';
import { Userdetail } from '../share/userdetail';

@Component({
  selector: 'app-edit-userdetail',
  templateUrl: './edit-userdetail.component.html',
  styleUrls: ['./edit-userdetail.component.css']
})
export class EditUserdetailComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private _router:Router,
    private _uds:UserdetailService) { }
    addForm:FormGroup;
    userdetail:Userdetail;
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit(){
    const userId = localStorage.getItem('editUserId');
        if (!userId) {
          alert('Invalid action.');
          this._router.navigate(['']);
          return;
        }
      this.addForm = this.formBuilder.group({
          id: [],
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
          password: ['', Validators.required]
        });
        const data = this._uds.getUserById(+userId);
        this.addForm.setValue(data);
  }
  isInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  isEmailInvalid(name: string) {
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }

  onSubmit() {
    this._uds.update(this.addForm.value);
    this._router.navigate(['']);
  }

  onCancel() {
    this._router.navigate(['']);
  }

}
