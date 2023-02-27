import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor (
    private primengConfig: PrimeNGConfig) {}

  title = 'Tour of Heroes';

  ngOnInit(){
    this.primengConfig.ripple= true;
  }

}