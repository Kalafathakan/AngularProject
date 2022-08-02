import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { check } from '@igniteui/material-icons-extended';
import { Subscription } from 'rxjs';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { MenuType } from 'src/app/Services/menu.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public subs = new Subscription()

  // userForm = new FormGroup({
  //   food_id: new FormControl<string | null>('', [
  //     Validators.required,
  //    // Validators.minLength(1),
  //   ]),
  //   food_name: new FormControl<string | null>('', [
  //     Validators.required,
  //     //Validators.minLength(3),
  //   ]),
  //   // price: new FormControl<string | null>('', [
  //   //   Validators.required,
  //   //  // Validators.minLength(1),
  //   // ]),
  //   category: new FormControl<string | null>('', [
  //     Validators.required,
  //     //Validators.minLength(3),
  //   ]),
  //   image: new FormControl<string | null>('', [
  //     Validators.required,
  //    // Validators.minLength(3),
  //   ]),
  //   // description: new FormControl<string | null>('', [
  //   //   Validators.required,
  //   //   //Validators.minLength(5),
  //   // ]),
  // });

  onSubmit() {
    //this.adminService.getUserForm().updateValueAndValidity()
   
   // console.log(this.userForm);
   console.log(this.adminService.getUserForm());
    
    // this.user.push({
    //   name: this.userForm.value.name!,
    //   email: this.userForm.value.email!,
    //   password: this.userForm.value.password!,
    // });
   
  }

  

  constructor(public adminService: AdminServiceService) { }

  ngOnInit(): void {
    // this.subs.add(this.adminService.getUserForm().valueChanges.subscribe((data)=>{
    //   console.log("data changed")
    //   console.log(data)
    // }))

  }

  firstFunction(){
    console.log("calisti")
  }

  // getUserForm(){
  //   return this.userForm
  // }
 

  // sayHi() {
  //   if(confirm("Are you sure to delete ")) {
  //     console.log("hi")   
    
  //   }
   
  // }

  // updateForm(){
  //   this.userForm.updateValueAndValidity()
  //   this.userForm.value.food_name = "deneme"
  // }

  updateFood(data:MenuType) {
    if(confirm("Are you sure to edit this food? ")) {
    //   this.adminService.findFood(id)
    //   console.log( this.adminService.getSelectedFood())
    //  // console.log("hi")   
    
    }
   
  }

  createFood(data:MenuType) {
    if(confirm("Are you sure to edit this food? ")) {
      // this.adminService.findFood(id)
      // console.log( this.adminService.getSelectedFood())
     // console.log("hi")   
    
    }

    
   
  }

}
