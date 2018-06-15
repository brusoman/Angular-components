import {Component, Input, OnInit} from '@angular/core';
import {OptionModel} from "./select-button.model";

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input() options: OptionModel[];
  @Input('ngModel') selected;
  @Input('multiple') multiple;
  isMultiple: boolean = false;
  selectedOptions: OptionModel[] = [];
  labels: string[] = []; //Array with buttons's names
  constructor() {
  }

  ngOnInit() {
    //////////TEST////////////
    this.multiple = 'multiple';
    /////////////////////////
    console.log(this.multiple);
    console.log("On init");
    if ('label' in this.options[0]) {
      for (let i = 0; i < this.options.length; i++) {
        console.log(this.options[i]);
        this.labels[i] = this.options[i].label;
        //this.labels.push(this.options[i].label); // TODO: What is better?
      }
    }
  }

  onSelect(option: OptionModel) {

    if (this.multiple != 'multiple') {
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].isSelected = false;
      }
    }
    option.isSelected = !option.isSelected;

    this.selectedOptions.push(option);
    console.log(option);
    console.log("Array: ", this.selectedOptions);


  }


}


