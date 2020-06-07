import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch() {
    const fields = 'name,description,version,homepage';
    // console.log(this.queryField.value);

    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {
      
      const params = {
        search: value,
        fields: fields
      };
      
      this.results$ = this.http
        // .get(this.SEARCH_URL + '?fields=' + fields + '&search=' + value)
        .get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results)
        );
    }
  }
}
