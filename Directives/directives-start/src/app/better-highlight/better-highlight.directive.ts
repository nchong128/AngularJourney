import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string = 'black';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.textColor = 'black';
  }





}
