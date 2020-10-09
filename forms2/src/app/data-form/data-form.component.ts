import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { EstadoBr } from '../shared/models/estado-br';
import { DropdownService } from './../shared/services/dropdown.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  // estados: EstadoBr[];
  estados: Observable<EstadoBr[]>;
  cargos: any[];
  tecnologias: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {

    this.estados = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    /*this.dropdownService.getEstadosBr().subscribe(dados => {
    this.estados = dados;
    console.log(dados);
  });*/
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null)
      })
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({

        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),

      cargo: [null],
      tecnologias: [null]
    });

    // tslint:disable-next-line: max-line-length
    // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    // [Validators.required, Validators.minLength(3), Validators.maxLength(20)]

  }

  onSubmit() {

    console.log(this.formulario);

    if (this.formulario.valid){

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(
        map(res => res))
      .subscribe(dados => {
        console.log(dados);
        // reseta o form
        // this.formulario.reset();
        // this.resetar();
      },
      (error: any) => alert('erro'));

    } else {
      console.log('formulário inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalido(){
    // tslint:disable-next-line: prefer-const
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors){
      // tslint:disable-next-line: no-string-literal
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  // consultaCEP(){

  //   let cep = this.formulario.get('endereco.cep').value;
  //   // console.log(cep);

  //   // Nova variável "cep" somente com dígitos.
  //   cep = cep.replace(/\D/g, '');
  //   // Verifica se campo cep possui valor informado.
  //   // tslint:disable-next-line: triple-equals
  //   if (cep != ''){
  //     // Expressão regular para validar o CEP.
  //     // tslint:disable-next-line: prefer-const
  //     let validacep = /^[0-9]{8}$/;
  //     // Valida o formato do CEP.
  //     if (validacep.test(cep)) {

  //       this.resetaDadosForm();

  //       this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  //           .subscribe(dados => this.populaDadosForm(dados));
  //     }
  //   }
  // }

  consultaCEP(){

    // tslint:disable-next-line: prefer-const
    let cep = this.formulario.get('endereco.cep').value;
    // console.log(cep);

    if (cep != null && cep !== ''){
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados){

    this.formulario.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

    // this.formulario.get('nome').setValue('Carlos');

    // console.log(formulario);
  }

  resetaDadosForm(){
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(){
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

  setarTecnologias1(){
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

  setarTecnologias2(){
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

}
