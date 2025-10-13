import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <nav class="nav">
      <a routerLink="/dashboard">🏠 Dashboard</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .nav {
        padding: 1rem;
      }
      a {
        margin-right: 1rem;
      }
    `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)], // ✅ this is crucial
});
