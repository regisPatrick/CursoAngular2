import { Observable, empty, Subject } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];

  // bsModalRef: BsModalRef;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static:true}) deleteModal;

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: Curso;

  constructor(private service: CursosService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
    // this.service.list()
    // .pipe(
    //   catchError(error => empty())
    // )
    // .subscribe(
    //   dados => {
    //     console.log(dados);
    //   }// ,
    //   // error => console.error(error),
    //   // () => console.log('Observable completo!')
    // );
  }  

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id)
    .subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.')
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  } 

}