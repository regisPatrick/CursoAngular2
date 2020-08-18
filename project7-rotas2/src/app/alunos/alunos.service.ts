import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.alunos.length; i++){
      // tslint:disable-next-line: prefer-const
      let aluno = this.alunos[i];
      // tslint:disable-next-line: triple-equals
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
