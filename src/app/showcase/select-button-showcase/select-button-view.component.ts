import {Component, OnInit} from '@angular/core';
import {OBJ_OPTIONS, OBJ_OPTIONS2} from "./button-mock";
import {OptionModel} from "../../components/select-button/select-button.model";

@Component({
  selector: 'select-button-view',
  templateUrl: './select-button-view.component.html',
  styleUrls: ['./select-button-view.component.scss']
})
export class SelectButtonViewComponent implements OnInit {
  _options = OBJ_OPTIONS;
  _options2 = OBJ_OPTIONS2;

  _selectedOptionsMultiple: OptionModel[];
  _selectedOptionsSingle: OptionModel[];

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedOptionsMultiple(options: OptionModel[]) {
    this._selectedOptionsMultiple = options;
  }

  getSelectedOptionsSingle(options: OptionModel[]) {
    this._selectedOptionsSingle = options;
  }
}
