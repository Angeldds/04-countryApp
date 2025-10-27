import { Component,Input, Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})

export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>;
  private debounceSuscription?:Subscription;

    //va a recibir algo desde afuera
  @Input()
  public pleaceholder: string = '';

  @Output()
  //creamos un evento que va a emitir algo hacia afuera
  public onValue = new EventEmitter<string>();

   @Output()
  //creamos un evento que va a emitir algo hacia afuera
  public onDebounce = new EventEmitter<string>();

  // esto es lo que pide angular
  ngOnInit(): void {
    this.debounceSuscription = this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe(value=>{
      this.onDebounce.emit(value);
    });

  }

    ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log('destruido')
    this.debounceSuscription?.unsubscribe();
  }

//metodo que recibe un valor "value" y lo emite hacia afuera con el evento onValue
  emitValue(value: string): void {
    this.onValue.emit(value);
  }
//
  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);

  }
}
