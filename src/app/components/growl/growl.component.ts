import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GrowlModel} from "./growl-model";
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'growl-component',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {
  @Input() model: GrowlModel;
  @Input() timer: number;
  @Output() onExitEvent: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  growl: GrowlModel;
  faCheck = faCheck; //Type image
  exitButton = faTimes;// Button image

  ngOnInit() {
    this.growl = this.model; // New test
    //setTimeout(this.exit, 2000);TODO: вызов exit падает с ошибкой
  }

  exit() {

    console.log("In GrowlComponent: Gonna exit");
    this.onExitEvent.emit(this.growl);
  }
}
