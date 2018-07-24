import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuoteService {

  constructor(private httpClient: HttpClient) {
  }

  getNewQuote() {
    return this.httpClient.get("http://quotes.stormconsultancy.co.uk/random.json");

  }
}
