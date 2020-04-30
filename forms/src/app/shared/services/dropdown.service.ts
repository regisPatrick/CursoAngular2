import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from '../models/estado-br.model';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  // getEstadosBr() {
  //   return this.http.get('assets/dados/estadosbr.json')
  //     .pipe(
  //       map((res: Response) => res.json()));
  // }

  getEstadosBR() {
    return this.http.get<EstadoBr[ ]>('assets/dados/estadosbr.json')
    .pipe(map(res => res));
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

}
