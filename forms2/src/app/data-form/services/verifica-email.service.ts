import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

constructor(private http: HttpClient) { }

verificarEmail(email: string) {
  return this.http.get('assets/dados/verificarEmail.json')
    .pipe(
      map((dados: { emails: any[]}) => dados.emails);
    )
}

}
