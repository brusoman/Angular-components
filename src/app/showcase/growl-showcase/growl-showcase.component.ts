import {Component, ViewEncapsulation} from '@angular/core';
import {GROWLES, GrowlModel} from "../../components/growl/growl-item/growl-model";

@Component({
  selector: 'growl-showcase',
  templateUrl: './growl-showcase.component.html',
  styleUrls: ['./growl-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GrowlShowcaseComponent {
  _growlArray: GrowlModel[] = GROWLES.slice();

  showSucceed() {
    this._growlArray.push(GROWLES[0]);
  }

  showInfo() {
    this._growlArray.push(GROWLES[1]);
  }

  showError() {

    this._growlArray.push(GROWLES[2]);

  }
}
