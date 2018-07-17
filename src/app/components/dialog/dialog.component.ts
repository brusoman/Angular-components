import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DialogModel} from "./dialog.model";

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  @Input() model: DialogModel;
  @Input() display: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  yes() {
    this.hide();
    console.log("Yes");
  }

  no() {
    this.hide();
  }

  hide() {
    this.display = false;
    console.log(this.display);
  }
}
