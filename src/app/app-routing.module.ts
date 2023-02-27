// 'CommonModule' references and 'declarations' array are unnecessary, so are no longer part of 'AppRoutingModule'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'}, // Default route
  { path: 'detail/:id', component: HeroDetailsComponent}, // Parameterized route to 'routes' array that matches path pattern to hero detail view
  { path: 'dashboard', component: DashboardComponent }, // Add route to 'routes' array taht matches a path to 'DashboardComponent'
  { path: 'heroes', component: HeroesComponent },
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'homepage', component: HomepageComponent}
];

@NgModule({
  // Import RouterModule and Routes to let application have routing capability
  imports: [ RouterModule.forRoot(routes) ], // Imports array and configures it with the 'routes' in one step
  exports: [ RouterModule ] // Exports 'RouterModule' to available throughout the application.
})
export class AppRoutingModule {}
