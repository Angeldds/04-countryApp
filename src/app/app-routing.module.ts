import { NgModule } from '@angular/core';
import {  Routes, RouterModule  } from '@angular/router';

import { AboutPage } from './shared/pages/about-page/about-page';
import { ContactPage } from './shared/pages/contact-page/contact-page';

// Este array contiene la definición de todas las rutas de la aplicación.
const routes: Routes = [
  /*{
    // Define la ruta para la URL '/home'.
    path: '',
    // Especifica qué componente se debe mostrar cuando se navega a '/home'.
    component: HomePage
  },*/
  {
    // Define la ruta para la URL '/about'.
    path: 'about',
    // Especifica qué componente se debe mostrar cuando se navega a '/about'.
    component: AboutPage
  },
   {
    // Define la ruta para la URL '/about'.
    path: 'contact',
    // Especifica qué componente se debe mostrar cuando se navega a '/contact'.
    component: ContactPage
  },
   {
    // Define la ruta para la URL '/about'.
    path: 'countries',
    // Carga perezosa (lazy loading) del módulo de países.
    // aqui se usa import() para cargar el módulo solo cuando se accede a esta ruta.
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
  },
  {
    // Esta es una ruta "comodín" o "wildcard".
    // El doble asterisco (**) captura cualquier URL que no coincida con las rutas anteriores.
    path: '**',
    // Redirige al usuario a la ruta '/home' si intenta acceder a una URL no definida.
    redirectTo: 'countries'
  }
];

// El decorador @NgModule configura esta clase como un módulo de Angular.
@NgModule({
  // Importa el RouterModule y lo configura con nuestras rutas definidas.
  // .forRoot() se usa solo una vez en el módulo de enrutamiento principal (AppRoutingModule).
  imports: [
    RouterModule.forRoot(routes)
  ],
  // Exporta el RouterModule para que otros módulos que importen AppRoutingModule
  // (como AppModule) tengan acceso a las directivas del router (ej. router-outlet, routerLink).
  exports: [
    RouterModule
  ]
})
// Esta clase agrupa toda la configuración de enrutamiento.
// Se importa en el AppModule principal para activar las rutas en la aplicación.
export class AppRoutingModule { }
