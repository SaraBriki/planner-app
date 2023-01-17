import { Component, OnInit } from '@angular/core';
import { Task } from './models/Task';

@Component({
  selector: 'daily-tasks-list',
  templateUrl: 'daily-tasks-list.component.html',
  styleUrls: ['daily-tasks-list.component.css'],
})
export class DailyTasksListComponent implements OnInit {
  title: string = "";
  tasks: Task[] = [];

  constructor() {}

  ngOnInit() {}
}
