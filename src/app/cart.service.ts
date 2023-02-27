import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Hero[] = [];

    addToCart(hero: Hero, addQty: number = 1){
      // Checking and find the id if the id is in cart or not
      // If exist it will increase the item quantity, otherwise will push the new item

      // let existing, if the item exist the variable existing will have the value. Otherwise undefined
      let existing = this.items.find((item) => item.id === hero.id);
      console.log("EXISTING:", existing); // For debuging use
      // this.items.push(hero);
      if(existing){
        existing.quantity = existing.quantity + addQty;
      }
      else{
        // If we didn't assign hero.quantity it will covered by this.items.push(hero) and always be 1
        hero.quantity = addQty;
        this.items.push(hero);
      }
      console.log(existing); // For debuging use
    }

    getItems(){
      return this.items;
    }

    emptyCart(){
      this.items = []
      return this.items;
    }
    constructor(private http: HttpClient){}
}
