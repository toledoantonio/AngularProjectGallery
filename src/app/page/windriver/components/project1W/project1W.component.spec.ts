import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1WComponent } from './project1W.component';

describe('Project1WComponent', () => {
  let component: Project1WComponent;
  let fixture: ComponentFixture<Project1WComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1WComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
