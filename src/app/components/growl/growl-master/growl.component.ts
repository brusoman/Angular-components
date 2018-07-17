import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "../growl-item/growl-model";

@Component({
  selector: 'growl-master',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GrowlComponent implements OnInit {
  @Input() messages: GrowlModel[];

  constructor() {
  }

  ngOnInit() {


  }

  destroyGrowl(growl: GrowlModel) {
    console.log("Array before delete: " + JSON.stringify(this.messages));
    console.log("Index to delete: " + this.messages.indexOf(growl));
    this.messages.splice(this.messages.indexOf(growl), 1);
    //console.log("Delete: " + JSON.stringify(growl))
    console.log("Array after delete: " + JSON.stringify(this.messages));

  }

}
