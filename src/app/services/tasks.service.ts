import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Task } from '../models/Task';

let tasksUrl = environment.baseUrl + '/tasks/';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {
  }

  getTasksByDate(date: string) {
    return this.http.get(tasksUrl + date);

  }

  postTasks(date: string, tasks: Task[]) {
    return this.http.post(tasksUrl, {
      date: date,
      tasks: tasks,
    });


  }

}
