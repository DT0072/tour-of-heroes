import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { SortEvent } from 'primeng/api';

import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  items= this.cartService.getItems();
  totalPrice : number = 0;

    checkoutForm= this.formBuilder.group({name: '', address: ''});
    right: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.items.forEach(item => {
      this.totalPrice += (+item.price.replace('RM','')) * item.quantity;
    })
  }

  onSubmit(): void{
    //Process checkout data
    this.items= this.cartService.emptyCart();
    console.warn('Your order submitted successfully', this.checkoutForm.value);
  }
  
  showButton(){
    this.items;
    //   return this.items.length> 0; (Way 1)
    //   // if(this.items.length<= 0){ (Way 2)
    //   //   return false
    //   // }
    //   // else{
    //   //   return true;
    //   // }
    }
}
