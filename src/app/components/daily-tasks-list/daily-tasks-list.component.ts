import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskCategory } from '../../models/Task';
import { TaskStatus } from '../../models/Task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MessageService } from '../../services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'daily-tasks-list',
  templateUrl: 'daily-tasks-list.component.html',
  styleUrls: ['daily-tasks-list.component.css'],
})
export class DailyTasksListComponent implements OnInit {
  @Input() title: string = '';
  @Input() nav: any;
  tasks: Task[] = [
    new Task({
      description: 'Get bread, milk and some fruits.',
      category: TaskCategory.Groceries,
      status: TaskStatus.InProgress,
    }),
    new Task({
      description: 'Do 3 hours of Angular project.',
      category: TaskCategory.School,
      status: TaskStatus.InProgress,
    }),
    new Task({
      description: 'Meditate & Yoga class.',
      category: TaskCategory.SelfCare,
      status: TaskStatus.Completed,
    }),
  ];

  constructor(private messageService: MessageService,private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    console.log(this.tasks);
  }
  addTask() {
    if(this.nav.opened){
      this._snackBar.open('side nav is already open','OK')
      return
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
        obs.unsubscribe();
        obs2.unsubscribe();
        this.nav.close()
      },
    });
    var obs2 = this.nav.closedStart.subscribe({next:()=>{
      obs.unsubscribe();
      obs2.unsubscribe()
      }})
  }

}
