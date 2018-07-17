import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {OptionModel} from "./select-button.model";

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input() options: OptionModel[];
  @Input('multiple') multiple: boolean;

  @Input() outTemplate: TemplateRef<any>;
  @Output() onSelect: EventEmitter<OptionModel[]> = new EventEmitter<OptionModel[]>();
  @Output() onOptionClick = new EventEmitter<any>();
  _selectedOptions: OptionModel[] = [];


  ngOnInit() {
    console.log("On init");
    console.log("Multiple:", this.multiple);
  }

  onClick(clickOption: OptionModel) {

    if (!this.multiple) {
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].isSelected = false;
      }
    }
    clickOption.isSelected = !clickOption.isSelected;

    this._selectedOptions = [];
    for (let option of this.options) {
      if (option.isSelected) {
        this._selectedOptions.push(option);
      }
    }

    console.log(clickOption);
    console.log("Array from multiple: ", this.multiple, this._selectedOptions);

    this.onSelect.emit(this._selectedOptions);
  }


}


