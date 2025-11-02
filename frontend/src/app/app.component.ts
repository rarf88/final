import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar><main class="container"><router-outlet></router-outlet></main>`,
  styles: [`main{max-width:960px;margin:20px auto;padding:0 12px;}`]
})
export class AppComponent { }
