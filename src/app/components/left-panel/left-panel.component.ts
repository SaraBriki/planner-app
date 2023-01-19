import { Component, Input } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  description = new FormControl();
  @Input() nav:any

  constructor(private messageService:MessageService) {
  }


  save() {
    console.log(this.description.value)
    this.messageService.sendMessage(this.description.value)
  }
  close(){
    this.nav.close()

  }
}
