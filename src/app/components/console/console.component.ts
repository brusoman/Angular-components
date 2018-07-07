import {Component, Input, Pipe, PipeTransform} from '@angular/core';
import {OptionModel} from "../select-button/select-button.model";

@Component({
  selector: 'console-component',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent {
  @Input() inArray: OptionModel[];
  text: string = JSON.stringify(this.inArray);
}

@Pipe({name: 'consolePipe'})
export class ConsolePipe implements PipeTransform {
  transform(value: OptionModel[]): String[] {

    return value.map((option) => JSON.stringify(option))
  }
}
