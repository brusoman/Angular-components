import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SelectButtonComponent} from './components/select-button/select-button.component';
import {SelectButtonViewComponent} from './showcase/select-button-view/select-button-view.component';
import {ConsoleComponent, ConsolePipe} from './components/console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectButtonComponent,
    SelectButtonViewComponent,
    ConsoleComponent,
    ConsolePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
