import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable,catchError, map, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore ={
    byCapital:   {term:  '', countries:[]},
    byCountries: {term:  '', countries:[]},
    byRegion:    {region:  '', countries:[]},
  }


  constructor(private http: HttpClient) {
    console.log('CountriesService init');

  }


  private getCountryRequest(url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( () => of([]) ),
    //delay(2000)
    )
  }


  searchConuntruyByAlphaCode(code: string):Observable<Country|null> {
        const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null ),
      catchError( () => of(null) )
  );
  }

//url para buscar por capital
  searchCapital(term: string):Observable<Country[]> {
    //url para buscar por capital
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountryRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = {term:term, countries:countries})
    );
  }


//url para buscar por pais
searchCountry(term: string):Observable<Country[]> {
  const url = `${this.apiUrl}/name/${term}`;

    return this.getCountryRequest(url)
        .pipe(
      tap(countries => this.cacheStore.byCountries = {term:term, countries:countries})
    );
}

//url para buscar por region
searchRegion(region: Region):Observable<Country[]> {
  const url = `${this.apiUrl}/region/${region}`;

    return this.getCountryRequest(url)
        .pipe(
      tap(countries => this.cacheStore.byRegion = {region:region, countries:countries})
    );
}
}
