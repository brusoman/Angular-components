import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GROWLES, GrowlModel} from "../../components/growl/growl-model";

@Component({
  selector: 'growl-view',
  templateUrl: './growl-view.component.html',
  styleUrls: ['./growl-view.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class GrowlViewComponent implements OnInit {
  growlArray: GrowlModel[] = GROWLES.slice();

  ngOnInit(): void {

  }

  showSucceed() {
    this.growlArray.push(GROWLES[0]);
  }

  showInfo() {
    this.growlArray.push(GROWLES[1]);
  }

  showError() {

    this.growlArray.push(GROWLES[2]);

  }
}
