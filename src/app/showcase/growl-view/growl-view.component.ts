import {Component, OnInit} from '@angular/core';
import {GROWLES, GrowlModel} from "../../components/growl/growl-model";

@Component({
  selector: 'growl-view',
  templateUrl: './growl-view.component.html',
  styleUrls: ['./growl-view.component.scss']
})
export class GrowlViewComponent implements OnInit {
  growlArray: GrowlModel[] = GROWLES;

  ngOnInit(): void {

  }

  showSucceed(messages: GrowlModel[]) {
    this.growlArray.push(GROWLES[0]); //TODO: NOT WORK!
  }

  showInfo() {
    this.growlArray.push(GROWLES[1]);//TODO: NOT WORK!
  }

  showError() {

    this.growlArray.push(GROWLES[2]);//TODO: NOT WORK!

  }
}
