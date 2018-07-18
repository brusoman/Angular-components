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
  @Output() onExit: EventEmitter<GrowlModel> = new EventEmitter<GrowlModel>();

  _hidden: boolean = false;
  ngOnInit() {
    setTimeout(this.exit.bind(this), 10000);
  }

  exit() {
    this._hidden = true;
    setTimeout(() => this.onExit.emit(this.model), 2000);
    console.log("In GrowlComponent: Gonna exit");
  }
}
