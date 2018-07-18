import {Routes} from "@angular/router";
import {SelectButtonShowcaseComponent} from "./showcase/select-button-showcase/select-button-showcase.component";
import {GrowlShowcaseComponent} from "./showcase/growl-showcase/growl-showcase.component";
import {DialogShowcaseComponent} from "./showcase/dialog-showcase/dialog-showcase.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/select-button',
    pathMatch: 'full'
  },
  {path: 'select-button', component: SelectButtonShowcaseComponent},
  {path: 'growl', component: GrowlShowcaseComponent},
  {path: 'dialog', component: DialogShowcaseComponent},

];
