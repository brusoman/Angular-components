import {Component, OnInit} from '@angular/core';
import {GROWLES, GrowlModel} from "./growl-model";
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'growl-component',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {
  growl: GrowlModel;
  faCoffee = faCheck;
  faTimes = faTimes;
  ngOnInit() {
    this.growl = GROWLES[0];
  }

}
