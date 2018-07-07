import {Component, OnInit} from '@angular/core';
import {GROWLES, GrowlModel} from "./growl-model";

@Component({
  selector: 'growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {
  growl: GrowlModel;

  ngOnInit() {
    this.growl = GROWLES[0];
  }

}
