import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa1Component } from './empresa1.component';

describe('Empresa1Component', () => {
  let component: Empresa1Component;
  let fixture: ComponentFixture<Empresa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empresa1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empresa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
