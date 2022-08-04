import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
	IgxAccordionModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingComponent } from './components/booking/booking.component';
import { DealsComponent } from './components/deals/deals.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import jwt_decode from 'jwt-decode';
import { AuthService } from './Services/auth.service';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    BookingComponent,
    DealsComponent,
    GalleryComponent,
    ReviewsComponent,
    MenuComponent,
    HomeComponent,
    FaqComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    MyDashboardComponent,
    NewsletterComponent,
    AdminMenuComponent,
    AdminNavigationComponent,
    AdminOrderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule, 
    IgxAccordionModule,
    IgxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // ngOnInit(): void {
  //   console.log("test")
  // }

  constructor(private aut:AuthService) {

    var decodeddata = {
      user: {
        email: "",
        accountType: ""
      }
    }
   let myToken = localStorage.getItem('authToken')!
   if(myToken){ 
   decodeddata = jwt_decode(myToken)
    console.log("test")
    aut._isLoggedIn$.next(true)
    let accountType = decodeddata.user.accountType
    if (accountType === 'admin') {
      console.log("account is admin")
      aut._isAdminLoggedIn$.next(true)

    }

   }

   }


}
