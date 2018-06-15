import { Component, OnInit } from '@angular/core';
import {OBJ_OPTIONS} from "./button-mock";

@Component({
  selector: 'select-button-view',
  templateUrl: './select-button-view.component.html',
  styleUrls: ['./select-button-view.component.scss']
})
export class SelectButtonViewComponent implements OnInit {
  options = OBJ_OPTIONS;
  Test = "Test String";
  constructor() { }

  ngOnInit() {
  }

}
