import { Component, Input, OnInit } from '@angular/core';
import { TaskCategory } from 'src/app/models/Task';

/**
 * @title Basic cards
 */
@Component({
  selector: 'task-card',
  templateUrl: 'task-card.component.html',
  styleUrls: ['task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() description: string = '';
  @Input() category: TaskCategory = TaskCategory.Other;
  categoryStr: string = 'Other';

  constructor() {}
  ngOnInit() {
    this.categoryStr = TaskCategory[this.category];
  }
}
