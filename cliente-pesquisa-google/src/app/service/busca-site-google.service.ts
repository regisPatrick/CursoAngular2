import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscaSiteGoogleService {

  apiUrl = 'http://localhost:8080/search/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getSearch(query: string): Observable<string | any> {
    return this.httpClient.get<any>(this.apiUrl + query, this.httpOptions);
  }

}
