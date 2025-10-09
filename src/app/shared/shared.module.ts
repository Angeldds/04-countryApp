import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { Sidebar } from './components/sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { ContactPage } from './pages/contact-page/contact-page';
import { SearchBoxComponent } from './components/search-box/search-box';



@NgModule({
  declarations: [
    HomePage,
    AboutPage,
    Sidebar,
    ContactPage,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
],
  exports: [
    HomePage,
    AboutPage,
    Sidebar,
    ContactPage,
    SearchBoxComponent


  ]
})
export class SharedModule { }
