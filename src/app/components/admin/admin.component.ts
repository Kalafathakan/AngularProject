import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  onSubmit2() {
    console.log(this.userForm);
    // this.user.push({
    //   name: this.userForm.value.name!,
    //   email: this.userForm.value.email!,
    //   password: this.userForm.value.password!,
    // });
   
  }

  constructor(public adminService: AdminServiceService) { }

  ngOnInit(): void {
  }

  sayHi() {
    if(confirm("Are you sure to delete ")) {
      console.log("hi")   
    
    }
   
  }

}
