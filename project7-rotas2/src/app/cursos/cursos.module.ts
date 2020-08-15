import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  // providers: [CursosService]
  providers: [CursosService]
})
export class CursosModule { }
