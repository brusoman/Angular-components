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
  @Output() onExit: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  exitButton = faTimes;// Button image

  ngOnInit() {
    setTimeout(this.exit.bind(this), this.timer);
  }

  exit() {
    console.log("In GrowlComponent: Gonna exit");
    this.onExit.emit(this.model);

  }
}
