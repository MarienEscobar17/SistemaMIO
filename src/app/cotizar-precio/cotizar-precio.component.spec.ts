import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarPrecioComponent } from './cotizar-precio.component';

describe('CotizarPrecioComponent', () => {
  let component: CotizarPrecioComponent;
  let fixture: ComponentFixture<CotizarPrecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizarPrecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizarPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
