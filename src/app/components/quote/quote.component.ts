import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../services/quote-service/quote.service";
import {QuoteModel} from "./quote.model";

@Component({
  selector: 'quote-component',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  _model: QuoteModel;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.showAnother();
  }

  showAnother() {
    this.quoteService.getNewQuote().subscribe((data) => {
      this._model = {
        text: data['quote'],
        author: data['author']
      }
    });
  }
}

