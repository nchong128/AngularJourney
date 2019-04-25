import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openState: boolean = false;

  @HostListener('click') toggleOpen(eventData: Event) {
    this.openState = !this.openState;
  }

  constructor() { }



}
