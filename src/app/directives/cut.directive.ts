import { Directive, ElementRef, Renderer2 } from "@angular/core";

//использую диррективу для добавления троеточия, просто что бы показать что знаю этот механизм
@Directive({
  selector: '[cutStyle]'
})
export class CutDerective {
  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.addClass(el.nativeElement, 'cut');
  }
}