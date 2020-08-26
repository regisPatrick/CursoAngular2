import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log('AuthGuard');

    return this.verifarAcesso();
  }

  private verifarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('CanLoad: verificando se usuário pode carregar o codigo do modulo');

    return this.verifarAcesso();
  }

}
