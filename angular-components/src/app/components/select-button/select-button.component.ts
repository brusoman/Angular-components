import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'select-button-component',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {

  @Input() options;
  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
