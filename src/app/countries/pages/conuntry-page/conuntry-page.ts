import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-conuntry-page',
  standalone: false,
  templateUrl: './conuntry-page.html',
  styleUrl: './conuntry-page.css'
})
//aqui estoy creando la logica para obtener el id del pais que quiero mostrar
// onInit es un metodo que se ejecuta cuando el componente se inicializa y sirve para cargar datos o configurar el componente
export class CountryPageComponent implements OnInit {

  public country?:Country;

  constructor(
    private ativaredRoute: ActivatedRoute,
    private router:Router,
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.ativaredRoute.params
      .pipe(
        //obtengo el id del pais)
        switchMap( ({id}) => this.countriesService.searchConuntruyByAlphaCode(id))
      )
      .subscribe( country => {
        if (!country) return this.router.navigateByUrl('');
          return this.country = country
         //return
    })
}
}
