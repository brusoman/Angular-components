import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SelectButtonComponent} from './components/select-button/select-button.component';
import {SelectButtonViewComponent} from './showcase/select-button-view/select-button-view.component';
import {GrowlComponent} from './components/growl/growl.component';
import {GrowlViewComponent} from './showcase/growl-view/growl-view.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GrowlMasterComponent} from './components/growl-master/growl-master.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    SelectButtonViewComponent,
    GrowlComponent,
    GrowlViewComponent,
    GrowlMasterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
