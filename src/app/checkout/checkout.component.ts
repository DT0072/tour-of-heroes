import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  value: number= 1;
  items= this.cartService.getItems();
    checkoutForm= this.formBuilder.group({name: '', address: ''});
  right: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ){}
  
  onSubmit(): void{
    //Process checkout data
    this.items= this.cartService.emptyCart();
    console.warn('Your order submitted successfully', this.checkoutForm.value);
  }
}
