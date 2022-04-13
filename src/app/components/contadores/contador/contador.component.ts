import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  @Input() title : string = 'Contador App';
  @Input() numero: number = 0;
  @Input() base  : number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

}
