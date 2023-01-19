import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task, TaskCategory, TaskStatus } from 'src/app/models/Task';

/**
 * @title Basic cards
 */
@Component({
  selector: 'task-card',
  templateUrl: 'task-card.component.html',
  styleUrls: ['task-card.component.css'],
})
export class TaskCardComponent implements OnInit, AfterViewInit {
  @Input() task: Task = new Task({
    description: 'Meditate & Yoga class.',
    category: TaskCategory.SelfCare,
    status: TaskStatus.Completed,
  });
  @Output() completedToggle = new EventEmitter<boolean>();
  categoryStr: string = 'Other';
  completed = false;

  constructor() {
  }

  ngOnInit() {
    // @ts-ignore
    this.categoryStr = TaskCategory[this.task.category];
    this.completed = this.task.status == TaskStatus.Completed;
    console.log(this.completed);
  }

  ngAfterViewInit() {

  }

  toggleComplete() {
    this.completed = !this.completed;
    if (this.completed)
      this.task.status = TaskStatus.Completed;
    else
      this.task.status = TaskStatus.InProgress;
    this.completedToggle.emit(this.completed)

  }

}
