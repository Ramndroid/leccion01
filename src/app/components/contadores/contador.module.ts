import { NgModule } from '@angular/core';

// Componentes
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule { }
