import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TEST_DIALOG} from "../../components/dialog/dialog.model";

@Component({
  selector: 'dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogShowcaseComponent implements OnInit {
  _model;
  _display: boolean = true;
  constructor() {
  }

  ngOnInit() {
    this._model = JSON.parse(JSON.stringify(TEST_DIALOG));

  }

  displayDialog() {
    this._display = !this._display;

  }
}
