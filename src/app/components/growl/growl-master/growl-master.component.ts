import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "../growl-item/growl-model";

@Component({
  selector: 'growl-master',
  templateUrl: './growl-master.component.html',
  styleUrls: ['./growl-master.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GrowlMasterComponent implements OnInit {
  @Input() msg: GrowlModel[];

  constructor() {
  }

  ngOnInit() {


  }

  destroyGrowl(growl: GrowlModel) {
    console.log("Array before delete: " + JSON.stringify(this.msg));
    console.log("Index to delete: " + this.msg.indexOf(growl));
    this.msg.splice(this.msg.indexOf(growl), 1);
    //console.log("Delete: " + JSON.stringify(growl))
    console.log("Array after delete: " + JSON.stringify(this.msg));

  }

}
