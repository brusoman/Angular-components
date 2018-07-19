import {GrowlItemComponent} from "./growl-item/growl-item.component";
import {GrowlComponent} from "./growl-master/growl.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    GrowlItemComponent,
    GrowlComponent
  ],
  imports: [CommonModule],
  exports: [GrowlComponent]

})
export class GrowlModule {
}
