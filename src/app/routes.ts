import {Routes} from "@angular/router";
import {SelectButtonViewComponent} from "./showcase/select-button-showcase/select-button-view.component";
import {GrowlShowcaseComponent} from "./showcase/growl-showcase/growl-showcase.component";
import {DialogShowcaseComponent} from "./showcase/dialog-showcase/dialog-showcase.component";

export const appRoutes: Routes = [
  {path: 'select-button', component: SelectButtonViewComponent},
  {path: 'growl', component: GrowlShowcaseComponent},
  {path: 'dialog', component: DialogShowcaseComponent},

];
