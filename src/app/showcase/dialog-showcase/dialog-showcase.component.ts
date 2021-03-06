import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogModel, TEST_DIALOG} from "../../components/dialog/dialog.model";

@Component({
  selector: 'dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogShowcaseComponent implements OnInit {
  _model: DialogModel;
  _display: boolean = false;

  ngOnInit() {
    this._model = JSON.parse(JSON.stringify(TEST_DIALOG));
  }

  toggleDialog() {
    this._display = !this._display;
  }
}
