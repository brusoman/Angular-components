import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GrowlModel} from "./growl-model";
import {faCheck, faInfoCircle, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'growl-component',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {
  @Input() model: GrowlModel;
  @Input() timer: number;
  @Output() onExitEvent: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  exitButton = faTimes;// Button image

  growlImage; // Card image

  ngOnInit() {
    switch (this.model.type) {
      case "SUCCESS":
        this.growlImage = faCheck;

        break;
      case "INFO":
        this.growlImage = faInfoCircle;
        break;
      case "ERROR":
        this.growlImage = faTimes;
        break;
    }
    console.log(this.growlImage);
  }

  exit() {

    console.log("In GrowlComponent: Gonna exit");
    this.onExitEvent.emit(this.model);
  }
}
