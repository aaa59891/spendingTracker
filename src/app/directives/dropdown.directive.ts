import { Directive, HostBinding, HostListener, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
    selector: "[appDropdownBS4]"
})
export class DropdownBS4Directive implements OnInit{
    @HostBinding('class.show') isShow = false;
    constructor(
        private elRf: ElementRef,
        private render: Renderer2
    ) {}
    
    ngOnInit(): void {
    }
    @HostListener('click') onToggle(){
        this.isShow?
            this.render.removeClass(this.elRf.nativeElement.querySelector('div'), 'show')
            :
            this.render.addClass(this.elRf.nativeElement.querySelector('div'), 'show');
            
        this.isShow = !this.isShow;
    }
}
