import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route);
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
