import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuType } from './menu.service';

@Injectable({
  providedIn: 'root'
})



export class AdminServiceService {

//  menu$! : Observable<MenuType[]> ;

menu : MenuType[] = []

selectedFood : MenuType = {   "_id": "",
  "food_id": "",
  "food_name": "",
  "price": 0,
  "description": "",
  "category": "",
  "active": "",
  "image": "",
  "quantity": 0
}




  url: string = "https://shielded-depths-40144.herokuapp.com/foods"


  constructor(private http: HttpClient) { }

  updateFood(){

  }

  deleteFood(){

  }

  // getMenu(){
  //   return this.menu$
  // }

  // setMenu(menu: Observable<MenuType[]>){

  //   this.menu$ = menu
  // }

  getMenu(){
    return this.menu
  }

  setMenu(menu:MenuType[] ){
    this.menu = menu
  }

  getSelectedFood(){
    return this.selectedFood
  }

  setSelectedFood(food:MenuType){
    this.selectedFood = food
  }

  findFood(id:string){
    // console.log(this.menu)
    // console.log(id)

    // this.menu = this.menu.filter((m)=> {
    //   m.food_id.includes(id)
    // })

    // console.log(this.menu.filter((m)=> {
    //   m.food_id == id
    // }))

    //console.log( this.menu)

  //   this.menu = this.menu.filter((t) =>
  //   t.food_id
  //     .toLowerCase()
  //     .includes(id)
  // );
  //console.log(this.menu )

  this.menu.map((m)=>{
    if (m.food_id == id) { 
    console.log(m)

    this.setSelectedFood(m)
  
  
  }
  })

 

  }

}
