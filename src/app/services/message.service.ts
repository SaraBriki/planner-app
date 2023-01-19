import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject();

    sendMessage(message: string) {
        this.subject.next( message );
    }


    getMessage(): Observable<string> {
        // @ts-ignore
      return this.subject.asObservable();
    }
    clearMessage(){
      return this.subject.next(false)
    }
}
