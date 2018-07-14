import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SelectButtonComponent} from './components/select-button/select-button.component';
import {SelectButtonViewComponent} from './showcase/select-button-showcase/select-button-view.component';
import {GrowlComponent} from './components/growl/growl-item/growl.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GrowlMasterComponent} from './components/growl/growl-master/growl-master.component';
import {GrowlShowcaseComponent} from './showcase/growl-showcase/growl-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    SelectButtonViewComponent,
    GrowlComponent,
    GrowlMasterComponent,
    GrowlShowcaseComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
