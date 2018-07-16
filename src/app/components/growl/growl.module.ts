import {GrowlItemComponent} from "./growl-item/growl-item.component";
import {GrowlMasterComponent} from "./growl-master/growl-master.component";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    GrowlItemComponent,
    GrowlMasterComponent
  ],
  imports: [CommonModule],
  exports: [GrowlMasterComponent]

})
export class GrowlModule {
}
