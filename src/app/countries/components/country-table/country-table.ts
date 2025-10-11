import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.html',
  styleUrl: './country-table.css'
})
export class CountryTable {
  // recibe los paises desde el componente padre
  @Input()
  countries: Country[] = [];

}
