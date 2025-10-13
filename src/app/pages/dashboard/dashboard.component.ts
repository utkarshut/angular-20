import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <h2>Practice Dashboard</h2>
    <ul>
      <li><a routerLink="/debounce-demo">Debounce Demo</a></li>
      <li><a routerLink="/duplicate-removal">Duplicates Removal</a></li>
      <li><a routerLink="/observable-cancel">Observable Cancel</a></li>
      <li><a routerLink="/take-until-example">Take Until Example</a></li>
      <li><a routerLink="/performance">Performance Optimization</a></li>
    </ul>
  `,
})
export class DashboardComponent {}
