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

}
