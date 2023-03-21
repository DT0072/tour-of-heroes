import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  /*Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon*/
  myFunction() {
    var x = document.getElementById("myTopnav");
     if (x != null){
      if (x.className === "topnav-right") { // === is to compare the values
        x.className += " responsive";
    } else {
        x.className = "topnav-right";
    }
     }
  }
}
