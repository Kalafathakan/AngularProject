import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subscribeForm = new FormGroup({
    firstname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
})
onSubmit(){
  console.log(this.subscribeForm.value.firstname)
  console.log(this.subscribeForm.value.email)
  
  this.subscribeForm.reset();
}
}
