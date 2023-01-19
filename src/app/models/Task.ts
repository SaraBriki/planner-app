import { Params } from '@angular/router';

export enum TaskCategory {
  Groceries,
  Work,
  School,
  SelfCare,
  Other,
}

export enum TaskStatus {
  // Waiting,
  InProgress,
  Completed,
  // OnHold,
}

export class Task {
  description: string;
  category: TaskCategory;
  status: TaskStatus;

  constructor({
    description = '',
    category = TaskCategory.Other,
    status = TaskStatus.InProgress,
  }: Params) {
    this.description = description;
    this.category = category;
    this.status = status;
  }

  // setStatusMessage() {
  //   switch (this.status) {
  //     case TaskStatus.Waiting:
  //       return 'This task is still waiting to be done...';
  //     case TaskStatus.OnHold:
  //       return 'You put this task on hold. Come back for it later.';
  //     case TaskStatus.Completed:
  //       return 'Hooray! Task is completed.';
  //     case TaskStatus.InProgress:
  //       return 'Task in Progress'
  //   }
  // }
}
