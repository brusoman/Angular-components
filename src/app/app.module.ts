import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SelectButtonShowcaseComponent} from './showcase/select-button-showcase/select-button-showcase.component';
import {DialogShowcaseComponent} from './showcase/dialog-showcase/dialog-showcase.component';

import {GrowlShowcaseComponent} from './showcase/growl-showcase/growl-showcase.component';
import {DemonstrationPageComponent} from './showcase/demonstration-page/demonstration-page.component';
import {RouterModule} from "@angular/router";
import {GrowlModule} from "./components/growl/growl.module";
import {SelectButtonModule} from "./components/select-button/select-button.module";
import {DialogModule} from "./components/dialog/dialog.module";
import {appRoutes} from "./routes";
import {ConsoleModule} from "./components/console/console.module";


@NgModule({
  declarations: [
    AppComponent,
    DialogShowcaseComponent,
    SelectButtonShowcaseComponent,
    GrowlShowcaseComponent,
    DemonstrationPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    GrowlModule,
    SelectButtonModule,
    DialogModule,
    ConsoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
