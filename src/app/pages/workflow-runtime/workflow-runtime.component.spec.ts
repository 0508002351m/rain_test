import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowRuntimeComponent } from './workflow-runtime.component';

describe('WorkflowRuntimeComponent', () => {
  let component: WorkflowRuntimeComponent;
  let fixture: ComponentFixture<WorkflowRuntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowRuntimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowRuntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
