import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskCategory } from '../../models/Task';
import { TaskStatus } from '../../models/Task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MessageService } from '../../services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'daily-tasks-list',
  templateUrl: 'daily-tasks-list.component.html',
  styleUrls: ['daily-tasks-list.component.css'],
})
export class DailyTasksListComponent implements OnInit {
  @Input() title: string = '';
  @Input() nav: any;
  tasks: Task[] = [];
  loading: boolean = true;

  constructor(private messageService: MessageService, private _snackBar: MatSnackBar, private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasksByDate(this.title).subscribe({
      next: (response) => {
        this.loading = false;
        if(response){
          console.log(response)
          // @ts-ignore
          this.tasks=  response['tasks'].map(
            (description: string) => {
              console.log(description)
              return new Task({
                description: description,
                category: TaskCategory.SelfCare,
                status: TaskStatus.Completed,
              });
            });
          console.log(this.tasks)

        }
      },
    });
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    console.log(this.tasks);
    this.saveChanges();
  }

  addTask() {
    if (this.nav.opened) {
      this._snackBar.open('side nav is already open', 'OK');
      return;
    }


    this.nav.open();
    let obs = this.messageService.getMessage().subscribe({
      next: (message: string) => {
        this.tasks.push(
          new Task({
            description: message,
            category: TaskCategory.Other,
            status: TaskStatus.InProgress,
          }),
        );
        this.saveChanges();
        obs.unsubscribe();
        obs2.unsubscribe();
        this.nav.close();

      },
    });
    var obs2 = this.nav.closedStart.subscribe({
      next: () => {
        obs.unsubscribe();
        obs2.unsubscribe();
      },
    });
  }

  private saveChanges() {
    this._snackBar.open('saving changes...', undefined, { duration: 2000 });
    this.taskService.postTasks(this.title, this.tasks).subscribe({
      next: (response) => {
        this._snackBar.open('changes saved', 'OK', { duration: 2000 });
      },
      error: (response) => {
        this._snackBar.open('an error occurred while saving changes.', 'OK', { duration: 2000 });
      },
    });

  }

}
