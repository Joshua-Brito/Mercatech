import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  standalone: true // Ou false se usar NgModules
})
export class DestaqueDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.background = '#f0f0f0';
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.background = 'blue';
  }
}