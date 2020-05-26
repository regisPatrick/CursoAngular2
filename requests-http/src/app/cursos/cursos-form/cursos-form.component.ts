import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private service: CursosService,
    private modal: AlertModalService, 
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // let registro = null;

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curso$ = this.service.loadByID(id);
    //     curso$.subscribe(curso => {
    //       registro = curso;
    //       this.updateForm(curso);
    //     });
    //   }
    // );

    // console.log(registro);

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id))
    // )
    // .subscribe(curso => this.updateForm(curso));

    // concatMap -> ordem da requisição importa
    // mergeMap -> ordem não importa
    // exhaustMap -> casos de login

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });  
  // }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        // success => console.log('sucesso'),
        success => {
          this.modal.showAlertSuccess('Curso criado com sucesso!');
          this.location.back();
        },
        // error => console.error(error),
        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente!'),
        () => console.log('Request completo')
      );
    }
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
  
  onCancel(){
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
