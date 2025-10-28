import { Component, OnInit} from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.html',
  styleUrl: './by-region-page.css'
})
export class ByRegionPageComponent implements OnInit{

      // Esta propiedad pública almacenará la lista de países que se reciba de la API.
      // Se inicializa como un array vacío.
      public countries: Country[] = [];

      public regions:Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
      public selectedRegion?: Region;

      // El constructor es donde se realiza la inyección de dependencias.
      // Aquí, estamos pidiendo a Angular que nos "inyecte" una instancia del CountriesService.
      // 'private' crea automáticamente una propiedad 'this.countriesService' en la clase.
      constructor(private countriesService: CountriesService) { }

      ngOnInit(): void {
        this.countries = this.countriesService.cacheStore.byRegion.countries;
        this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
      }

      // Este método público se encarga de llamar al servicio para buscar países.
      // Recibe un 'term' (término de búsqueda) que generalmente viene de un input.
      public searchByRegion(region: Region): void {


                //nuevo codigo
          this.selectedRegion = region
        //-----------



        // Llama al método 'searchCapital' del servicio, pasándole el término de búsqueda.
        // Este método devuelve un Observable, al cual nos tenemos que suscribir.
        this.countriesService.searchRegion(region)

          // .subscribe() es el método que se ejecuta cuando el Observable recibe una respuesta.
          // "countries" (el parámetro de la función flecha) es el array de países que devolvió la API.
          .subscribe(countries => {
            // Asignamos los países recibidos a nuestra propiedad local 'this.countries'.
            // Al hacer esto, el HTML se actualizará automáticamente para mostrar la nueva lista.
            this.countries = countries;
          });
      }

}
