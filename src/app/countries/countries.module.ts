import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page';
import { CountryPageComponent } from './pages/conuntry-page/conuntry-page';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTable } from './components/country-table/country-table';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    ByCountryPageComponent,
    CountryTable,

  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
