import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private scripts: any = {};

  constructor() {
    this.scripts = {
      'jquery': { loaded: false, src: './assets/js/jquery.min.js' },
      'appear': { loaded: false, src: '../assets/js/appear.js' },
      'auto-complete': { loaded: false, src: 'assets/js/auto-complete.js' },
      'backgroundstretch': { loaded: false, src: 'assets/js/backgroundstretch.js' },
      'bootstrap-slider': { loaded: false, src: 'assets/js/bootstrap-slider.js' },
      'chosen': { loaded: false, src: 'assets/js/chosen.jquery.js' },
      'countTo': { loaded: false, src: 'assets/js/countTo.js' },
      'dev_themefunction': { loaded: false, src: 'assets/js/dev_themefunction.js' },
      'gmap3': { loaded: false, src: 'assets/js/gmap3.js' },
      'isotope': { loaded: false, src: 'assets/js/isotope.pkgd.js' },
      'navhideshow': { loaded: false, src: 'assets/js/jquery.navhideshow.js' },
      'steps': { loaded: false, src: 'assets/js/jquery.steps.js' },
      'sticky-kit': { loaded: false, src: 'assets/js/jquery.sticky-kit.js' },
      'sticky-sidebar': { loaded: false, src: 'assets/js/jquery.sticky-sidebar.js' },
      'vide': { loaded: false, src: 'assets/js/jquery.vide.min.js' },
      'owl-carousel': { loaded: false, src: 'assets/js/owl.carousel.min.js' },
      'parallax': { loaded: false, src: 'assets/js/parallax.js' },
      'prettyPhoto': { loaded: false, src: 'assets/js/prettyPhoto.js' },
      'rAF': { loaded: false, src: 'assets/js/rAF.js' },
      'raphael': { loaded: false, src: 'assets/js/raphael-min.js' },
      'scrollbar': { loaded: false, src: 'assets/js/scrollbar.min.js' },
      'sortable': { loaded: false, src: 'assets/js/sortable.js' },
      'YouTubePopUp': { loaded: false, src: 'assets/js/YouTubePopUp.jquery.js' }
    };
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
        script.onerror = (error: any) => {
          resolve({ script: name, loaded: false, status: 'Error' });
        };
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}
