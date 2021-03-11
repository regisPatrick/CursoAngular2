import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaGoogleComponent } from './busca-google.component';

describe('BuscaGoogleComponent', () => {
  let component: BuscaGoogleComponent;
  let fixture: ComponentFixture<BuscaGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
