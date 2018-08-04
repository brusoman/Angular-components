import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @ViewChild('body') body: ElementRef;
  isMin: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {

    window.addEventListener("scroll", () => {
      let coordinates = this.body.nativeElement.getBoundingClientRect();

      if (coordinates.bottom < this.body.nativeElement.offsetHeight) {
        console.log("ALERT");
        this.isMin = true;
      } else {
        this.isMin = false;
      }
      console.log("BOTTOM" + coordinates.bottom + " Height" + this.body.nativeElement.offsetHeight);
    });
  }

  min(): void {
    this.isMin = !this.isMin;
  }

  ngOnDestroy(): void {
    this.body.nativeElement.removeEventListener("click", () => {
      console.log('Scrolled')
    });

  }
}
