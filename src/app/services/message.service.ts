import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private subject = new Subject();

  sendMessage(message: Task) {
    this.subject.next(message);
  }


  getMessage(): Observable<Task> {
    // @ts-ignore
    return this.subject.asObservable();
  }

  clearMessage() {
    return this.subject.next(false);
  }
}
