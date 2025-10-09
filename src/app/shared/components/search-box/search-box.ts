import { Component,Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})

export class SearchBoxComponent {

  @Input()
  public pleaceholder: string = '';
}
