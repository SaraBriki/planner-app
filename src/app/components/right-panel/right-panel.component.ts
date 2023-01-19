import { Component, Input } from '@angular/core';
import { TaskCategory } from '../../models/Task';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css'],
})
export class RightPanelComponent {
  @Input() nav: any;
}
