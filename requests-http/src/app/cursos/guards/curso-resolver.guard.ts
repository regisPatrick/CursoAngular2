import { CursosService } from './../cursos.service';
import { Curso } from './../curso';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

    constructor(private service: CursosService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
        if(route.params && route.params['id']) {
            return this.service.loadByID(route.params['id']);
        }

        return {
            id: null,
            nome: null
        };

    }
    
}