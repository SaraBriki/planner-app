import { Component, Input } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormControl } from '@angular/forms';
import { Task, TaskCategory, TaskStatus } from '../../models/Task';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  description = new FormControl();
  @Input() nav:any

  categories: any[] = [];
  selected: number=0;

  constructor(private messageService:MessageService) {
    const keys2 = Object.keys(TaskCategory).filter((v) => isNaN(Number(v)));
    keys2.forEach((key, index) => {
      this.categories.push({ 'value': index, 'viewValue': key });
    });
  }


  save() {
    let task:Task=new Task({
      description:this.description.value,
      category: this.selected,
      status:TaskStatus.InProgress
      }
    )
    this.messageService.sendMessage(task)
  }
  close(){
    this.nav.close()

  }
}
