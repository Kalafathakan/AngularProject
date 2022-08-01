import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { MenuService, MenuType } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //food: MenuType[] = [];

  categories: string[] = ["Starters", "Mains", "Curries", "Desserts", "Beverages"];

  constructor( private myMenuService: MenuService, public adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.myMenuService.getMenu().subscribe((data) => {
     // this.food = data;
     this.adminService.setMenu(data) 
    });
  }

  getCategories() {
    return this.categories;
  }

}
