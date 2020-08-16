import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent/*,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent*/
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,
    AppRoutingModule
  ],
  providers: [],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
