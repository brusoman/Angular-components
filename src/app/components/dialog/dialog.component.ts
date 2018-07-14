import {Component, Input, OnInit} from '@angular/core';
import {DialogModel} from "./dialog.model";

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() model: DialogModel;
  constructor() {
  }

  ngOnInit() {
  }

}
