import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2WComponent } from './project2W.component';

describe('Project2WComponent', () => {
  let component: Project2WComponent;
  let fixture: ComponentFixture<Project2WComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project2WComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
