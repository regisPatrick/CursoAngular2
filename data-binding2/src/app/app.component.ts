import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // title = 'app works!';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

}
