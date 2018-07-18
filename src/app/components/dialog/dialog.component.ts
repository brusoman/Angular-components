import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {DialogModel} from "./dialog.model";

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  @Input() model: DialogModel;
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter<boolean>();



  hide() {
    this.display = !this.display;
    this.displayChange.emit(this.display);
    console.log(this.display);
  }
}
