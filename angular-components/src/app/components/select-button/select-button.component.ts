import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {OptionModel} from "./select-button.model";

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input('options') options: OptionModel[];
  @Input('multiple') multiple: boolean;

  @Input() outTemplate: TemplateRef<any>;
  @Output() onSelect: EventEmitter<OptionModel[]> = new EventEmitter<OptionModel[]>();
  @Output()onOptionClick = new EventEmitter<any>();
  selectedOptions: OptionModel[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log("On init");
    console.log("Multiple:",this.multiple);
   }

  onClick(option: OptionModel) {

    if (!this.multiple) {
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].isSelected = false;
      }
    }
    option.isSelected = !option.isSelected;

    this.selectedOptions = [];
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].isSelected) {
      this.selectedOptions.push(this.options[i]);
      }
    }

    console.log(option);
    console.log("Array from multiple: ",this.multiple, this.selectedOptions);

  this.onSelect.emit(this.selectedOptions);
  }


}


