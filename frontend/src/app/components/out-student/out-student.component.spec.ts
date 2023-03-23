import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStudentComponent } from './out-student.component';

describe('OutStudentComponent', () => {
  let component: OutStudentComponent;
  let fixture: ComponentFixture<OutStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
