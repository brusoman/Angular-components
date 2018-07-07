import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {OptionModel} from "./select-button.model";

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent {

  @Input() options: OptionModel[];
  @Input() multiple: boolean;

  @Input() outTemplate: TemplateRef<any>;
  @Output() onSelect: EventEmitter<OptionModel[]> = new EventEmitter<OptionModel[]>();
  selectedOptions: OptionModel[] = [];

  onClick(clickOption: OptionModel) {
    if (!this.multiple) {
      if (clickOption.isSelected) {
        clickOption.isSelected = !clickOption.isSelected;
        this.onSelect.emit([]);
        return;
      }
      for (let option of this.options) {
        option.isSelected = false;
      }
    }
    clickOption.isSelected = !clickOption.isSelected;

    this.selectedOptions = [];
    for (let option of this.options) {
      if (option.isSelected) {

        this.selectedOptions.push(option);
      }
    }
    this.onSelect.emit(this.selectedOptions);
  }


}


