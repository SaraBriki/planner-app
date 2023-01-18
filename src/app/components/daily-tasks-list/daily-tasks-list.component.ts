import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskCategory } from '../../models/Task';
import { TaskStatus } from '../../models/Task';

@Component({
  selector: 'daily-tasks-list',
  templateUrl: 'daily-tasks-list.component.html',
  styleUrls: ['daily-tasks-list.component.css'],
})
export class DailyTasksListComponent implements OnInit {
  @Input() title: string = '';
  tasks: Task[] = [
    new Task({
      description: 'Get bread, milk and some fruits.',
      estimatedTime: 45,
      category: TaskCategory.Groceries,
      dueDate: new Date(),
      elapsedTime: 0,
      isImportant: false,
    }),
    new Task({
      description: 'Do 3 hours of Angular project.',
      estimatedTime: 180,
      category: TaskCategory.School,
      dueDate: new Date().setFullYear(2023, 0, 19),
      elapsedTime: 120,
      isImportant: true,
    }),
    new Task({
      description: 'Meditate & Yoga class.',
      estimatedTime: 70,
      category: TaskCategory.SelfCare,
      elapsedTime: 0,
      isImportant: true,
    }),
  ];

  constructor() {}

  ngOnInit() {}
}
