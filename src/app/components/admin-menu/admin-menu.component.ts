import { Component, OnInit } from '@angular/core';
import { MenuService, MenuType } from 'src/app/Services/menu.service';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  food: MenuType[] = [];

  categories: string[] = ["Starters", "Mains", "Curries", "Desserts", "Beverages"];

  constructor( private myMenuService: MenuService) { }

  ngOnInit(): void {
    this.myMenuService.getMenu().subscribe((data) => {
      this.food = data;
    });
  }


  getCategories() {
    return this.categories;
  }

  sayHi() {
    if(confirm("Are you sure to delete ")) {
      console.log("hi")   
    
    }
   
  }

  

}
