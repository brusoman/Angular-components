import { Component, OnInit } from '@angular/core';
import {ObjOPTIONS, OPTIONS} from "./button-mock";

@Component({
  selector: 'select-button-view',
  templateUrl: './select-button-view.component.html',
  styleUrls: ['./select-button-view.component.scss']
})
export class SelectButtonViewComponent implements OnInit {
  options = ObjOPTIONS;
  Test = "Test String";
  constructor() { }

  ngOnInit() {
  }

}
