import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CheckoutForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl<string | null>('', [Validators.required, Validators.minLength(10)])
  })

  onSubmit() {
    console.log(this.CheckoutForm);
    //this.myReviewService.addReview(ngForm).subscribe((data) => console.log(data));
  }

}
