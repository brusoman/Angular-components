import {Component, Input} from '@angular/core';
import {OptionModel} from "../select-button/select-button.model";

@Component({
  selector: 'console-component',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {
  @Input() inArray: OptionModel[];
  // test = OBJ_OPTIONS;


}
