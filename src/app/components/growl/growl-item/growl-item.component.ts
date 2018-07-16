import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "./growl-model";

@Component({
  selector: 'growl-component',
  templateUrl: './growl-item.component.html',
  styleUrls: ['./growl-item.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class GrowlItemComponent implements OnInit {
  @Input() model: GrowlModel;
  @Input() timer: number;
  @Output() onExitEvent: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  ngOnInit() {
    setTimeout(() => this.onExitEvent.emit(this.model), this.timer);
  }

  exit() {
    this.onExitEvent.emit(this.model);
  }
}
