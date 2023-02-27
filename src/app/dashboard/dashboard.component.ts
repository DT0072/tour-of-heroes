import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  heroes: Hero[]= [];

  constructor(
    private heroService: HeroService,
    private location: Location,){}

  // 'ngOnInit()' lifecycle hook calls 'getHeroes()'
  ngOnInit(): void{
    this.getHeroes();
  }

  // Returns the sliced list of heroes at positions 1 and 5, which means return only Heroes 2 to 5
  getHeroes(): void{
    this.heroService.getHeroes().subscribe (heroes=> this.heroes= heroes.slice(1, 5));
  }

  goBack(): void{
    this.location.back();
  } 
}
