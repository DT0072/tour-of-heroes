import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent {
  @Input() childItem: Hero = { id: 0, name: '', price: '0', description: '', quantity: 0};
}
