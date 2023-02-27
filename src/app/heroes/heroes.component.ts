// Defines a heroes array property
import { Component, OnInit } from '@angular/core'; // Component = decorator

import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// Delete the 'HEROES' import, straight import HeroService
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[]= [];
  constructor(private heroService: HeroService){}

  // Let Angular call 'ngOnInit()' at an appropriate time after constructing a 'HeroesComponent'
  ngOnInit(): void{ 
    this.getHeroes();
  }

  // Method which retrieve heroes from hero.service.ts
  // Subcribe in hero component
  getHeroes(): void{
    /* 'heroService.getHeroes()' returns an Observable so that it can use the Angular 'HttpClient.get' method to fetch the heroes 
    and have 'HttpClient.get()' return an Observable*/
    // Observable data
    // Replace below method this.heroes= this.heroService.getHeroes() due to 'Observable.subcribe' is critical difference
    this.heroService.getHeroes().subscribe(heroes=> this.heroes= heroes);
  }
}

