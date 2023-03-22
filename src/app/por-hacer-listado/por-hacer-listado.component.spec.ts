import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorHacerListadoComponent } from './por-hacer-listado.component';

describe('PorHacerListadoComponent', () => {
  let component: PorHacerListadoComponent;
  let fixture: ComponentFixture<PorHacerListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorHacerListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorHacerListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
