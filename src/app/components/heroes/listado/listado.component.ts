import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = [];
  heroeBorrado: string = "";

  constructor() {
    console.log('Constructor');
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  }

  borrarHeroe(): void {
    // this.heroes.pop();
    
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
