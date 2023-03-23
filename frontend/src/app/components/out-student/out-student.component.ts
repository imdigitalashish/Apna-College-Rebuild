import { Component, ElementRef, ViewChild } from '@angular/core';


declare var $: any;


@Component({
  selector: 'app-out-student',
  templateUrl: './out-student.component.html',
  styleUrls: ['./out-student.component.scss']
})
export class OutStudentComponent {



  intersectionObserver: IntersectionObserver;


  constructor() {

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("story_show");
        }
      })
    })

  }

  @ViewChild("buttonCTC") CTC: ElementRef;

  ngAfterViewInit() {

    document.querySelectorAll(".story").forEach((elem) => {
      this.intersectionObserver.observe(elem);
    });

    this.CTC.nativeElement.onclick = () => {
      window.open("https://www.apnacollege.in/course/alpha-batch-3");
    }

  }

}
