import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InputNumberModule } from 'primeng/inputnumber';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  hero: Hero | undefined;
  quantity: number= 1;
  

  // Inject the ActivatedRoute, HeroService, and Location services into the constructor, saving their values in private fields
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private cartService: CartService
  ){}

  ngOnInit(): void{
    this.getHero();
  }

  getHero(): void{
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=> this.hero= hero);
  }

  handleMinus() {
    this.quantity--;
    if (this.quantity<= 0) {
      this.quantity= 1
    }
  }
  
  handlePlus() {
    this.quantity++;   
    if (this.quantity>= 101) {
      this.quantity= 100
    }
  }

  addToCart(hero: Hero){
    this.cartService.addToCart(hero, this.quantity);
    window.alert('Your item has been added to cart!')
  }

  goBack(): void{
    this.location.back();
  } 
}
