import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {


  @ViewChild("btnAlpha") button: ElementRef;

  ngAfterViewInit() {
    this.button.nativeElement.onclick = () => {
      window.open("https://pages.razorpay.com/alpha-new-batch")
    }
  }

}
