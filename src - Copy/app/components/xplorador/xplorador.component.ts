import { Component } from '@angular/core';

@Component({
  selector: 'app-xplorador',
  // standalone: false,
  // imports: [],
  templateUrl: './xplorador.component.html',
  styleUrls: ['./xplorador.component.css']
})

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
export class XploradorComponent {
  redirectToLogin()
  {
    location.replace("http://localhost:4200/login");
  }
}
