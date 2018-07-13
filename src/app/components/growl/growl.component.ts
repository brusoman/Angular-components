import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "./growl-model";
import {faCheck, faInfoCircle, faTimes} from '@fortawesome/free-solid-svg-icons';

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

  growlImage; // Card image
  backgroundColor;
  ngOnInit() {
    switch (this.model.type) {
      case "SUCCESS":
        this.growlImage = faCheck;
        // this.backgroundColor = '$color-succeed';
        break;
      case "INFO":
        this.growlImage = faInfoCircle;
        // this.backgroundColor = '$color-info';

        break;
      case "ERROR":
        this.growlImage = faTimes;
        // this.backgroundColor = '$color-error';

        break;
    }
    console.log(this.growlImage);
  }

  exit() {

    console.log("In GrowlComponent: Gonna exit");
    this.onExitEvent.emit(this.model);
  }
}
