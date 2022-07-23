import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imagePath = '../../../assets/images/res.jpeg'

  subscribeForm = new FormGroup({
    firstname: new FormControl<string | null>('', [Validators.required]),
    lastname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    subject: new FormControl<string | null>('', [Validators.required]),
})
onSubmit(){
  console.log(this.subscribeForm.value.firstname)
  console.log(this.subscribeForm.value.email)
  
  this.subscribeForm.reset();
}
}
