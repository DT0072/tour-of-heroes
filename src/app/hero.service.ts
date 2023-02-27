// This file can get hero data from anywhere such web service, local storage or mock data source
// To make sure tht 'HeroService' can provide the service, register it with the injector.
import { Injectable } from '@angular/core'; // Injectable = decorator that accept metadata object for the service
/* Import observable and of sysbols from RxJS (Reactive Extension for Javascript). 
Observable is one of key classes in RxJS (Reactive Extension for Javascript) Library*/
import { Observable, of } from 'rxjs';
// Inject into HeroService edit constructor with a parameter that declares 'private message'
import { MessageService } from './message.service'; 

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/* Registers a provider with the root injector for service by including provider metadata allows Angular 
to optimize application by removing the service if it isn't in used.*/
@Injectable({
  providedIn: 'root' 
})

export class HeroService {
  constructor(private messageService: MessageService) { }
  
  // Replace 'Observable' into getHeroes method
  getHeroes(): Observable<Hero[]> {
    const heroes= of(HEROES);
    // Send a message to user when heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched Hero ID=${id}`);
    return of(hero);
  }

}
