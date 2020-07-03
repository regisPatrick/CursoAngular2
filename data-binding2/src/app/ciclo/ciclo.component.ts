import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  Input
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.sass']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
  AfterViewInit, AfterViewChecked, OnDestroy, AfterContentInit, AfterContentChecked {

    @Input() valorInicial: number = 10;

    constructor() {
      this.log('constructor');
    }

    ngOnChanges() {
      this.log('ngOnChanges');
    }

    ngOnInit() {
      this.log('ngOnInit');
    }

    ngDoCheck() {
      this.log('ngDoCheck');
    }

    ngAfterContentInit() {
      this.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
      this.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
      this.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
      this.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
      this.log('ngOnDestroy');
    }

    private log(hook: string) {
      console.log(hook);
    }
}
