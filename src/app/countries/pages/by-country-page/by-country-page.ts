import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css'
})
export class ByCountryPageComponent implements OnInit{

    // Esta propiedad pública almacenará la lista de países que se reciba de la API.
    // Se inicializa como un array vacío.
    public countries: Country[] = [];
    public initialValue: string = '';



    // El constructor es donde se realiza la inyección de dependencias.
    // Aquí, estamos pidiendo a Angular que nos "inyecte" una instancia del CountriesService.
    // 'private' crea automáticamente una propiedad 'this.countriesService' en la clase.
    constructor(private countriesService: CountriesService) { }

    ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byCountries.countries;
      this.initialValue = this.countriesService.cacheStore.byCountries.term;
    }

    // Este método público se encarga de llamar al servicio para buscar países.
    // Recibe un 'term' (término de búsqueda) que generalmente viene de un input.
    public searchByCountry(term: string): void {
      // Llama al método 'searchCapital' del servicio, pasándole el término de búsqueda.
      // Este método devuelve un Observable, al cual nos tenemos que suscribir.
      this.countriesService.searchCountry(term)
        // .subscribe() es el método que se ejecuta cuando el Observable recibe una respuesta.
        // "countries" (el parámetro de la función flecha) es el array de países que devolvió la API.
        .subscribe(countries => {
          // Asignamos los países recibidos a nuestra propiedad local 'this.countries'.
          // Al hacer esto, el HTML se actualizará automáticamente para mostrar la nueva lista.
          this.countries = countries;
        });
    }

}
