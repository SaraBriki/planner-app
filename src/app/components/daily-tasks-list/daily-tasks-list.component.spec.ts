import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTasksListComponent } from './daily-tasks-list.component';

describe('DailyTasksListComponent', () => {
  let component: DailyTasksListComponent;
  let fixture: ComponentFixture<DailyTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTasksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
