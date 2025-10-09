import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page';
import { CountryPageComponent } from './pages/conuntry-page/conuntry-page';

const routes: Routes = [
  // Aquí puedes definir las rutas específicas para el módulo de países.

  {
    path: 'by-capital',
    component: ByCapitalPageComponent,
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent,
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent,
  },
  {
    path: 'by/:id',
    component: CountryPageComponent,
  },
  {
    // Esta es una ruta "comodín" o "wildcard".
    // El doble asterisco (**) captura cualquier URL que no coincida con las rutas anteriores.
    path: '**',
    // Redirige al usuario a la ruta '/home' si intenta acceder a una URL no definida.
    redirectTo: 'by-capital'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
