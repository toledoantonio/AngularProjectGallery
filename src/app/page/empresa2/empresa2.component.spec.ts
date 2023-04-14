import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empresa2Component } from './empresa2.component';

describe('Empresa2Component', () => {
  let component: Empresa2Component;
  let fixture: ComponentFixture<Empresa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Empresa2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empresa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
