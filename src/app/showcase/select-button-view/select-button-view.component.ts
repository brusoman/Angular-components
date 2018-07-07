import {Component, OnInit} from '@angular/core';
import {OBJ_OPTIONS, OBJ_OPTIONS2} from "./button-mock";
import {OptionModel} from "../../components/select-button/select-button.model";

@Component({
  selector: 'select-button-view',
  templateUrl: './select-button-view.component.html',
  styleUrls: ['./select-button-view.component.scss']
})
export class SelectButtonViewComponent implements OnInit {
  options = OBJ_OPTIONS;
  options2 = OBJ_OPTIONS2;

  selectedOptionsMultiple: OptionModel[];
  selectedOptionsSingle: OptionModel[];

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedOptionsMultiple(options: OptionModel[]) {
    this.selectedOptionsMultiple = options;
    console.log("Multiple" + JSON.stringify(this.selectedOptionsMultiple));
  }

  getSelectedOptionsSingle(options: OptionModel[]) {
    this.selectedOptionsSingle = options;
    console.log("Single" + JSON.stringify(this.selectedOptionsSingle));

  }
}
