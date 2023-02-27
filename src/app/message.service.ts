import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  message: string[]= [];

  // Add a message into the cache
  add(message: string){
    this.message.push(message);
  }

  // Another clear the cache
  clear(){
    this.message= [];
  }

  constructor() { }
}
