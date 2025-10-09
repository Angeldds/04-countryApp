import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPageComponent {



public searchByCapital( term: string ): void {
  console.log('Desde ByCapitalPage');
  console.log({ term });
}
}
