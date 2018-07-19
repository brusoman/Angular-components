import {Component} from '@angular/core';
import {OBJ_OPTIONS, OBJ_OPTIONS2} from "./button-mock";
import {OptionModel} from "../../components/select-button/select-button.model";

@Component({
  selector: 'select-button-showcase',
  templateUrl: './select-button-showcase.component.html',
  styleUrls: ['./select-button-showcase.component.scss']
})
export class SelectButtonShowcaseComponent {
  _options = OBJ_OPTIONS;
  _options2 = OBJ_OPTIONS2;

  _selectedOptionsMultiple: OptionModel[];
  _selectedOptionsSingle: OptionModel[];


  getSelectedOptionsMultiple(options: OptionModel[]) {
    this._selectedOptionsMultiple = options;
  }

  getSelectedOptionsSingle(options: OptionModel[]) {
    this._selectedOptionsSingle = options;
  }
}
