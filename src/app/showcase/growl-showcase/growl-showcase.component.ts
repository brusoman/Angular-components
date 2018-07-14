import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {GROWLES, GrowlModel} from "../../components/growl/growl-item/growl-model";

@Component({
  selector: 'growl-showcase',
  templateUrl: './growl-showcase.component.html',
  styleUrls: ['./growl-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GrowlShowcaseComponent implements OnInit {
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
