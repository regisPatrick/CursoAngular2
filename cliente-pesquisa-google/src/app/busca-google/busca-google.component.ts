import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BuscaSiteGoogleService } from './../service/busca-site-google.service';

@Component({
  selector: 'app-busca-google',
  templateUrl: './busca-google.component.html',
  styleUrls: ['./busca-google.component.css']
})
export class BuscaGoogleComponent implements OnInit {

  resultadoPesquisa: any;

  constructor(
    private buscaSiteGoogleService: BuscaSiteGoogleService
  ) { }

  ngOnInit(): void {
  }

  getSearch(query: string){
    // tslint:disable-next-line: triple-equals
    if (query == null || query == undefined || query == ''){
      throw new Error('É necessário informar uma palavra para a busca.');
    }
    // tslint:disable-next-line: deprecation
    this.buscaSiteGoogleService.getSearch(query).subscribe(data => {
      this.resultadoPesquisa = data;
      console.log(this.resultadoPesquisa);
    });

  }

}
