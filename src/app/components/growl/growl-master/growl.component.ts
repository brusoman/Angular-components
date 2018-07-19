import {Component, Input, ViewEncapsulation} from '@angular/core';
import {GrowlModel} from "../growl-item/growl-model";

@Component({
  selector: 'growl-master',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GrowlComponent {
  @Input() messages: GrowlModel[];

  destroyGrowl(growl: GrowlModel) {
    if (this.messages.length = 1) {
      this.messages.splice(0, 0);
    }
    this.messages.splice(this.messages.indexOf(growl), 1);
    console.log(JSON.stringify(this.messages));
  }

}
