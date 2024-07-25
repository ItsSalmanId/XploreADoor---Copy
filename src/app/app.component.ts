// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'EmployeeManagement.UI';
// }

import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmployeeManagementUI';

  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    // this.scriptService.load(
    //   'jquery',
    //   'appear',
    //   'auto-complete',
    //   'backgroundstretch',
    //   'bootstrap-slider',
    //   'chosen',
    //   'countTo',
    //   'dev_themefunction',
    //   'gmap3',
    //   'isotope',
    //   'navhideshow',
    //   'steps',
    //   'sticky-kit',
    //   'sticky-sidebar',
    //   'vide',
    //   'owl-carousel',
    //   'parallax',
    //   'prettyPhoto',
    //   'rAF',
    //   'raphael',
    //   'scrollbar',
    //   'sortable',
    //   'YouTubePopUp'
    // ).then(data => {
    //   console.log('Scripts loaded', data);
    // }).catch(error => console.log(error));
  }
}
