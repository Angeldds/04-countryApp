import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})

export class SearchBoxComponent {

    //va a recibir algo desde afuera
  @Input()
  public pleaceholder: string = '';

  @Output()
  //creamos un evento que va a emitir algo hacia afuera
  public onValue = new EventEmitter<string>();

//metodo que recibe un valor "value" y lo emite hacia afuera con el evento onValue
  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
