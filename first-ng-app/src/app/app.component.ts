import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [`
    p {
      background-color: red
    }
  `],
})
export class AppComponent {
  title = 'first-ng-app';
}
