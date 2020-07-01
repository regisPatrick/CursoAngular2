import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.sass']// ,
  // tslint:disable-next-line: no-inputs-metadata-property
  // inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
