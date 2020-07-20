import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserdetailService } from '../share/userdetail.service';
import { Router } from '@angular/router';
import { Userdetail } from '../share/userdetail';

@Component({
  selector: 'app-add-userdetail',
  templateUrl: './add-userdetail.component.html',
  styleUrls: ['./add-userdetail.component.css']
})
export class AddUserdetailComponent implements OnInit {
  @ViewChild('userform') public createUserForm: NgForm;
  constructor(private formBuilder:FormBuilder,
    private _uds:UserdetailService,
    private _router:Router) { }
    addForm: FormGroup;
    @Output()
    createUserdetail=new EventEmitter<Userdetail>();
    
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  ngOnInit(){
    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
    this._uds.create(this.addForm.value);
    this.createUserForm.reset();
    this._router.navigate(['']);
  }
  onCancel()
  {
    this._router.navigate(['']);
  }
}
