import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { httpInterceptors } from './interceptor';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LandingComponent, FooterComponent],
  providers: [httpInterceptors],
})
export class CoreModule {}
