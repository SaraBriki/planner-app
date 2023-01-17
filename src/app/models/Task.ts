enum TaskCategory {
  Groceries,
  Work,
  School,
  SelfCare,
  Other,
}

enum TaskStatus {
  Waiting,
  InProgress,
  Completed,
  OnHold,
}

export class Task {
  description: string = '';
  estimatedTime: number = 0; // estimated time in minutes
  category: TaskCategory = TaskCategory.Other;
  dueDate: any = null;
  elapsedTime: number = 0; // time spent on the task so far
  status: TaskStatus = TaskStatus.Waiting;
  statusMessage: string = '';
  isImportant: boolean = false;

  constructor(
    description: string,
    estimatedTime: number,
    category: TaskCategory,
    dueDate: Date,
    elapsedTime: number,
    status: TaskStatus,
    isImportant: boolean
  ) {
    this.description = description;
    this.estimatedTime = estimatedTime;
    this.category = category;
    this.dueDate = dueDate;
    this.elapsedTime = elapsedTime;
    this.status = status;
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
