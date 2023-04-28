import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppFirebaseModule } from '../app-firebase/app-firebase.module';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, AppFirebaseModule],
  declarations: [AppComponent, TopBarComponent, SidenavComponent],
  exports: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
