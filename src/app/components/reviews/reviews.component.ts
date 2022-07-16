import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  searchValue: string = "";
  reviews = [
    {
      "name": "Nicholas",
      "rating": "5",
      "review": "Amazing Deals and unresistable taste! Definitely will be back!",
    },
    {
      "name": "Guray",
      "rating": "3",
      "review": "The drink and main combo is priced extremely well",
    },
    {
      "name": "Vishnu",
      "rating": "4.5",
      "review": "The right amount of food for the price",
    },
    {
      "name": "Zafer",
      "rating": "4.5",
      "review": "Finished my meal and wanted more from it being so good",
    },
    {
      "name": "Oreoluwa",
      "rating": "4",
      "review": "Would recommend to everyone",
    }
  ]
  stars = [
    {
      label: "5 Stars",
      value: "5",
      rating: "5"
    },
    {
      label: "4 Stars",
      value: "4",
      rating: "4"
    },
    {
      label: "3 Stars",
      value: "3",
      rating: "3"
    },
    {
      label: "2 Stars",
      value: "2",
      rating: "2"
    },
    {
      label: "1 Star",
      value: "1",
      rating: "1"
    }
  ];

  constructor() { }

  ngOnInit(): void { }
    //validation done inline, can be just 1 or an array of them
    RegistrationForm = new FormGroup({
      name: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
      rating: new FormControl<string | null>('', Validators.required),
      review: new FormControl<string | null>('', [Validators.required, Validators.maxLength(460)]),
    })
  
    onSubmit(form: NgForm) {
      console.log(form);
      this.reviews.push({ name: form.value.name, rating: form.value.rating, review: form.value.review });
      form.reset();
    }
}
