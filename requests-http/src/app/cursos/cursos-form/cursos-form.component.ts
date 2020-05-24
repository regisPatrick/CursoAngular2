import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(private fb: FormBuilder, private service: CursosService,
    private modal: AlertModalService, private location: Location) { }

  ngOnInit() {

    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

  }

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
