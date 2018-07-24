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
import {QuoteShowcaseComponent} from './showcase/quote-showcase/quote-showcase.component';
import {HttpClientModule} from "@angular/common/http";
import {QuoteModule} from "./components/quote/quote.module";
import {ShowcaseModule} from "./showcase/showcase.module";


@NgModule({
  declarations: [
    AppComponent,
    DialogShowcaseComponent,
    SelectButtonShowcaseComponent,
    GrowlShowcaseComponent,
    DemonstrationPageComponent,
    QuoteShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    GrowlModule,
    SelectButtonModule,
    DialogModule,
    ConsoleModule,
    HttpClientModule,
    QuoteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
