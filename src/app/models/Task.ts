import { Params } from '@angular/router';

export enum TaskCategory {
  Groceries,
  Work,
  School,
  SelfCare,
  Other,
}

export enum TaskStatus {
  Waiting,
  InProgress,
  Completed,
  OnHold,
}

export class Task {
  description: string;
  estimatedTime: number; // estimated time in minutes
  category: TaskCategory;
  dueDate: any;
  elapsedTime: number; // time spent on the task so far
  status: TaskStatus;
  statusMessage: string;
  isImportant: boolean;

  constructor({
    description = '',
    estimatedTime = 0,
    category = TaskCategory.Other,
    dueDate = null,
    elapsedTime = 0,
    status = TaskStatus.Waiting,
    isImportant = false,
  }: Params) {
    this.description = description;
    this.estimatedTime = estimatedTime;
    this.category = category;
    this.dueDate = dueDate;
    this.elapsedTime = elapsedTime;
    this.status = this.elapsedTime == 0 ? TaskStatus.Waiting : status;
    this.statusMessage = this.setStatusMessage();
    this.isImportant = isImportant;
  }

  setStatusMessage() {
    switch (this.status) {
      case TaskStatus.Waiting:
        return 'This task is still waiting to be done...';
      case TaskStatus.OnHold:
        return 'You put this task on hold. Come back for it later.';
      case TaskStatus.Completed:
        return 'Hooray! Task is completed.';
      case TaskStatus.InProgress:
        return (
          'You are ' +
          this.elapsedTime +
          ' minutes into this task. According to your estimation, there should be ' +
          (this.estimatedTime - this.elapsedTime) +
          ' minutes left to complete it.'
        );
    }
  }
}
