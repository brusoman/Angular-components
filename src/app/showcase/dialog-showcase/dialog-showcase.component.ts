import {Component, OnInit} from '@angular/core';
import {TEST_DIALOG} from "../../components/dialog/dialog.model";

@Component({
  selector: 'dialog-showcase',
  templateUrl: './dialog-showcase.component.html',
  styleUrls: ['./dialog-showcase.component.scss']
})
export class DialogShowcaseComponent implements OnInit {
  model
  constructor() {
  }

  ngOnInit() {
    this.model = JSON.parse(JSON.stringify(TEST_DIALOG));

  }

}
