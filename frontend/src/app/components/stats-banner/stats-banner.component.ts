import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stats-banner',
  templateUrl: './stats-banner.component.html',
  styleUrls: ['./stats-banner.component.scss']
})
export class StatsBannerComponent {



  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    });
  }

  @ViewChild("listOfCards") listOfCards: ElementRef;

  ngAfterViewInit() {

    document.querySelectorAll(".card").forEach((card) => {
      console.log(card)
      this.observer.observe(card);
    })


  }
}
