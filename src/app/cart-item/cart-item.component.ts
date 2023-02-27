import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() childItem: Hero = { id: 0, name: '', price: '0', description: '', quantity: 0};

  handleMinus() {
    this.childItem.quantity--;
    if (this.childItem.quantity<= 0) {
      this.childItem.quantity= 1
    }
  }
  
  handlePlus() {
    this.childItem.quantity++;   
    if (this.childItem.quantity>= 101) {
      this.childItem.quantity= 100
    }
  }

}
