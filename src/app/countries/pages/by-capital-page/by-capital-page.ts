// Importaciones necesarias de Angular y de tus propios archivos.
import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

// El decorador @Component define esta clase como un componente de Angular.
@Component({
  selector: 'app-by-capital-page', // El nombre de la etiqueta HTML para usar este componente.
  standalone: false,
  templateUrl: './by-capital-page.html', // La plantilla HTML asociada.
  styleUrl: './by-capital-page.css'   // La hoja de estilos asociada.
})
export class ByCapitalPageComponent {

  // Esta propiedad pública almacenará la lista de países que se reciba de la API.
  // Se inicializa como un array vacío.
  public countries: Country[] = [];
  public isLoading: boolean = false;

  // El constructor es donde se realiza la inyección de dependencias.
  // Aquí, estamos pidiendo a Angular que nos "inyecte" una instancia del CountriesService.
  // 'private' crea automáticamente una propiedad 'this.countriesService' en la clase.
  constructor(private countriesService: CountriesService) { }

  // Este método público se encarga de llamar al servicio para buscar países.
  // Recibe un 'term' (término de búsqueda) que generalmente viene de un input.
  public searchByCapital(term: string): void {
    this.isLoading = true;
    // Llama al método 'searchCapital' del servicio, pasándole el término de búsqueda.
    // Este método devuelve un Observable, al cual nos tenemos que suscribir.
    this.countriesService.searchCapital(term)
      // .subscribe() es el método que se ejecuta cuando el Observable recibe una respuesta.
      // "countries" (el parámetro de la función flecha) es el array de países que devolvió la API.
      .subscribe(countries => {
        // Asignamos los países recibidos a nuestra propiedad local 'this.countries'.
        // Al hacer esto, el HTML se actualizará automáticamente para mostrar la nueva lista.
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
