import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form){
    console.log(form);

    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      // .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        form.form.reset();
      });    

  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  // consultaCEP(cep, form){
  //   // console.log(cep);
  //   // Nova variável "cep" somente com dígitos.
  //   cep = cep.replace(/\D/g, '');
  //   // Verifica se campo cep possui valor informado.
  //   if (cep != ""){
  //     // Expressão regular para validar o CEP.
  //     var validacep = /^[0-9]{8}$/;
  //     // Valida formato do CEP.
  //     if (validacep.test(cep)){

  //       this.resetaDadosForm(form);

  //       this.http.get(`//viacep.com.br/ws/${cep}/json`)
  //         // .map(dados => dados.json())
  //         // .subscribe(dados => console.log(dados));
  //         .subscribe(dados => { this.populaDadosForm(dados, form); });
  //     }
  //   }
  // }

  consultaCEP(cep, form){
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, formulario){
    /*formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
        endereco: {
          cep: dados.cep,
           numero: '',
           complemento: dados.complemento,
           rua: dados.logradouro,
           bairro: dados.bairro,
           cidade: dados.localidade,
           estado: dados.uf
        }   
    });*/

    formulario.form.patchValue({
      endereco: {
        // cep: dados.cep,
         complemento: dados.complemento,
         rua: dados.logradouro,
         bairro: dados.bairro,
         cidade: dados.localidade,
         estado: dados.uf
      }
    });

    // console.log(form);
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        // cep: dados.cep,
         complemento: null,
         rua: null,
         bairro: null,
         cidade: null,
         estado: null
      }
    });  
  }

}
