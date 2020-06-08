import { Component } from '@angular/core';

@Component({
  selector: 'shop-root',
  template: ` <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li class="nav-link" [routerLink]="['/welcome']"><a>Home</a></li>
        <li></li>
        <li class="nav-link" [routerLink]="['/products']">
          <a>Product list</a>
        </li>
        <li></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {
  pageTitle: string = `Karolina's shop`;
}
