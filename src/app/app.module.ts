import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // NgModel here
import { HttpClientModule} from '@angular/common/http'; //Users can add, edit, and delete heroes and save these changes over HTTP
import { InMemoryDataService} from './in-memory-data.service';
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { InputNumberModule } from 'primeng/inputnumber';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    CartComponent,
    TopBarComponent,
    CheckoutComponent,
    HomepageComponent,
    CartItemComponent,
    CheckoutItemComponent,
  ],
  imports: [
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule,
    InputNumberModule,
  ],
  providers: [
    // No need to place providers due to the 'providedIn' flag
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
