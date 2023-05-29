import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2NComponent } from './project2N.component';

describe('Project2NComponent', () => {
  let component: Project2NComponent;
  let fixture: ComponentFixture<Project2NComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project2NComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2NComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
