import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Aluno } from '../aluno';
import { AlunosService } from './../alunos.service';

@Injectable()
class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    // tslint:disable-next-line: prefer-const
    let id = route.params['id'];

    return this.alunosService.getAluno(id);
  }
}
