import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "./growl-model";
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'growl-component',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class GrowlComponent implements OnInit {
  @Input() model: GrowlModel;
  @Input() timer: number;
  @Output() onExitEvent: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  exitButton = faTimes;// Button image

  ngOnInit() {
    setTimeout(() => this.onExitEvent.emit(this.model), this.timer);
  }

  exit() {

    console.log("In GrowlComponent: Gonna exit");
    this.onExitEvent.emit(this.model);
  }
}
