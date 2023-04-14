import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa3Component } from './empresa3.component';

describe('Empresa3Component', () => {
  let component: Empresa3Component;
  let fixture: ComponentFixture<Empresa3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empresa3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empresa3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
