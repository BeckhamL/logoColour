import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  Input
} from "@angular/core";
import tippy from "tippy.js";

@Directive({
  selector: "[tippyPopup]"
})
export class PopupDirective implements OnInit {
  element: HTMLElement;
  tippy: any;

  @Input()
  toolTipText: string;

  @HostListener("mouseenter")
  mouseenter() {
    if (this.tippy) {
      this.tippy.setProps({
        content: "Click to copy to clipboard"
      });
      this.tippy.show();
    }
  }

  @HostListener("click")
  click() {
    if (this.tippy) {
      this.tippy.setProps({
        content: "Copied " + this.toolTipText + ' to clipboard',
        duration: 500
      });
      this.tippy.show();
    }
  }

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.tippy = tippy(this.element, {
      inertia: true,
      animation: "scale"
    });
  }
}
