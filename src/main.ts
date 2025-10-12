import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/home/home';

@Component({
  selector: 'app-root',
  imports:[Home],
  template: `
    <app-home/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
