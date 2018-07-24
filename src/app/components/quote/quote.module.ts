import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {QuoteService} from "../services/quote-service/quote.service";
import {QuoteComponent} from "./quote.component";

@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [CommonModule],
  exports: [QuoteComponent],
  providers: [QuoteService]

})
export class QuoteModule {
}
