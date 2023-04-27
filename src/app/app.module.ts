import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [AppComponent, TopBarComponent, SidenavComponent],
  exports: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
