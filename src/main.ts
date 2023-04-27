import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    AppModule
  ],
  template: `
    <app-root></app-root>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
