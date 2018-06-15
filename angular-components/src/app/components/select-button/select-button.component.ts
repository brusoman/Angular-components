import {Component, Input, OnInit} from '@angular/core';
import {OptionModel} from "./select-button.model";

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input() options: OptionModel[];
  @Input('ngModel') selected: OptionModel; //TODO Make output here
  @Input('multiple') multiple: boolean;

  selectedOptions: OptionModel[] = [];

  constructor() {
  }

  ngOnInit() {
    console.log("On init");
    console.log("Multiple:",this.multiple);
   }

  onSelect(option: OptionModel) {

    if (this.multiple == false) {
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
    console.log("Array: ", this.selectedOptions);


  }


}


