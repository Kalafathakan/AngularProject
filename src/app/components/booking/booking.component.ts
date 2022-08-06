import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatLine } from '@angular/material/core';
import { Router } from '@angular/router';
import { BookingsService, IBooking } from 'src/app/Services/bookings.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  
  constructor(private bookingService: BookingsService, private router: Router) { }
  
  booking : IBooking[] = []
  rae : IBooking[] = []
   minDate: any
 maxDate: any
  initialValue = ""
  newslot : String[] = []
  myCurrentDate : any
  myFutureDate : any
   
  ngOnInit(): void {
    this.bookingService.getBokingd().subscribe({
      next: (res : any)=>{
        this.booking = res
       
        this.myCurrentDate = new Date();
        this.myCurrentDate.setDate(this.myCurrentDate.getDate() + 14 )
        this.myFutureDate = new Date(new Date(this.myCurrentDate).getDate() + 14);
        
                this.minDate = new Date()
          this.maxDate = new Date(this.myCurrentDate)
        
          console.log(this.minDate)
        console.log(this.maxDate )
      }

      
    })
   

  
  }
  registerForm = new FormGroup({
    name: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    phoneno: new FormControl<string | null>('', [Validators.required]),
})

selectedValue:any;
onInputChange(e:any) {
   this.selectedValue = e;
   console.log(e);
}
onSubmit(){
  console.log(this.registerForm.value.name)
  console.log(this.registerForm.value.email)

  let book : IBooking = {
    date: this.checkDate.toString(),
   time_slot: this.selectedValue,
  name: this.registerForm.value.name!,
  email: this.registerForm.value.email!,
  phoneno: this.registerForm.value.phoneno!,
  }
  

  this.bookingService.addBooking(book)
  .subscribe({
    next: (res) => {
      console.log(res)
    },
    error: (e)=>{
      console.log(e)
      
    },
    complete: ()=>{
      console.log("complete")
      this.router.navigateByUrl('/thankyou')
    }
  })
  this.registerForm.reset();
}
  checkDate!: Date;
  
  selectedDate(date : any){

      
   // date passes the newly selected value  
      console.log("Selected Value: " + date);
      this.checkDate = date;

         
      var date2 = new Date();
      var z = date2.getUTCDate()+date2.getUTCMonth()+date2.getUTCFullYear()
      
     var r : IBooking[] = []
     this.booking.forEach(function (i){
      var date1 = new Date(i.date);
      var y = date1.getUTCDate() + date1.getUTCMonth() - 1 + date1.getUTCFullYear()
     
      if (y === z) {
        
      r.push(i)
      }
    })
    // this.booking.forEach(function (i){
    //   var date1 = new Date(i.date);
    //   var y = date1.getUTCDate() + date1.getUTCMonth() + date1.getUTCFullYear()
    //  console.log(y);
    //   if (y === z) {
        
    //   r.push(i)
    //   }
    // })
    this.rae = r
    console.log(this.rae)
    var n : String[] = []
    //this.newslot = this.timeslot.filter(p => !this.rae.find(result => result.time_slot == p.time))
    this.timeslot.forEach(function (i){
      if(!r.find(result => result.time_slot == i.time)){
         n.push(i.time)
      }
    })
  this.newslot = n
    console.log("z" + this.newslot);
          }
  
timeslot = [{
  time: "12pm"
},
{
  time: "2pm"
},
{
  time: "4pm"
},
{
  time: "6pm"
},
{
  time: "8pm"
},
{
  time: "10pm"
},
]



 //myFutureDate = this.myFutureDate.getDate() + 14;
// minDate = new Date(this.myCurrentDate);
// maxDate = new Date(this.myFutureDate);



}
