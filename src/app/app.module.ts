import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent, TopBarComponent],
  exports: [AppComponent, TopBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
