import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  onSubmit(form){
    console.log(form);

    // console.log(this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(
        map(res => res))
      .subscribe(dados => {
        console.log(dados);
        form.form.reset();
      });
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep, form){
    // console.log(cep);

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    // Verifica se campo cep possui valor informado.
    // tslint:disable-next-line: triple-equals
    if (cep != ''){
      // Expressão regular para validar o CEP.
      // tslint:disable-next-line: prefer-const
      let validacep = /^[0-9]{8}$/;
      // Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe(dados => this.populaDadosForm(dados, form));
      }
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

    // console.log(formulario);
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}
