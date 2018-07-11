import {Component, Input, OnInit} from '@angular/core';
import {GrowlModel} from "../growl/growl-model";

@Component({
  selector: 'growl-master',
  templateUrl: './growl-master.component.html',
  styleUrls: ['./growl-master.component.scss']
})
export class GrowlMasterComponent implements OnInit {
  @Input() msg: GrowlModel[];

  constructor() {
  }

  ngOnInit() {


  }

  destroyGrowl(growl: GrowlModel) {
    //TODO Here we will destroy growl
    this.msg.splice(this.msg.indexOf(growl));
    console.log("Delete: " + JSON.stringify(growl))
  }

}
