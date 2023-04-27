import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [AppModule],
  template: `
    <app-root></app-root>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom([BrowserModule, BrowserAnimationsModule])],
});
