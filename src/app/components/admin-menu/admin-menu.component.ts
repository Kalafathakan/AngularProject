import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { MenuService, MenuType } from 'src/app/Services/menu.service';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  food: MenuType[] = [];

  categories: string[] = ["Starters", "Mains", "Curries", "Desserts", "Beverages"];

  constructor( private myMenuService: MenuService, public adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.myMenuService.getMenu().subscribe((data) => {
      //this.food = data;
      this.adminService.setMenu(data) 
    });
  }


  getCategories() {
    return this.categories;
  }

  editFood(id:string) {
    if(confirm("Are you sure to edit this food? ")) {
      this.adminService.findFood(id)
      console.log( this.adminService.getSelectedFood())
     // console.log("hi")   
    
    }
   
  }

  deleteFood(id:string) {
    if(confirm("Are you sure to delete this food?")) {
      this.adminService.findFood(id)
     // console.log("hi")   
    
    }
   
  }

  

}
