import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    phoneno: new FormControl<string | null>('', [Validators.required]),
})
onSubmit(){
  console.log(this.registerForm.value.name)
  console.log(this.registerForm.value.email)
  
  this.registerForm.reset();
}


}
