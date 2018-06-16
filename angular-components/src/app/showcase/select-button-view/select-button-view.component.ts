import {Component, OnInit} from '@angular/core';
import {OBJ_OPTIONS} from "./button-mock";
import {OptionModel} from "../../components/select-button/select-button.model";

@Component({
  selector: 'select-button-view',
  templateUrl: './select-button-view.component.html',
  styleUrls: ['./select-button-view.component.scss']
})
export class SelectButtonViewComponent implements OnInit {
  options = OBJ_OPTIONS;


  selectedOptionsMultiple: OptionModel[];
  selectedOptionsSingle: OptionModel[];

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedOptionsMultiple(options: OptionModel[]) {
    this.selectedOptionsMultiple = options;
  }

  getSelectedOptionsSingle(options: OptionModel[]) {
    this.selectedOptionsSingle = options;
  }
}
