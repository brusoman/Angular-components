import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ConsoleComponent, ConsolePipe} from "./console.component";

@NgModule({
  declarations: [
    ConsoleComponent,
    ConsolePipe
  ],
  imports: [CommonModule],
  exports: [ConsoleComponent, ConsolePipe]

})
export class ConsoleModule {
}
