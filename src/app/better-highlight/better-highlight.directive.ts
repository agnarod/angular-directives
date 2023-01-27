import { Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;


  constructor(private element: ElementRef,private rendere: Renderer2) { }


  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    //this.rendere.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.rendere.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.rendere.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor=this.defaultColor
  }

}
