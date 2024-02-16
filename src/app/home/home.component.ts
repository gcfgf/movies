import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
@Input() img!:string;
@Input() title!:string;

@Input() count:number=0;


@Output() increment:EventEmitter<void>= new EventEmitter<void>();
@Output() decrement:EventEmitter<void> = new EventEmitter<void>();

Onncrement(){
  this.increment.emit()
}

Ondecrement(){

  this.decrement.emit()
}

}

