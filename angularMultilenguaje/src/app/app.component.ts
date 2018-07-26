import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
// tslint:disable-next-line:import-blacklist
import {Subscription } from 'rxjs';
import {OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscription: Subscription;

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
    // Especificamos el lenguaje a usar
    translate.addLangs([ 'es', 'en', 'fr', 'cn', 'pt']);
    translate.setDefaultLang('es');

    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/es|en|fr|cn|pt/) ? browserlang : 'es');
    // translate.use('es');
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        const locale = param['locale'];
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
