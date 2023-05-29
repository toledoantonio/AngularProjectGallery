import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1NComponent } from './project1N.component';

describe('Project1NComponent', () => {
  let component: Project1NComponent;
  let fixture: ComponentFixture<Project1NComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1NComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1NComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
