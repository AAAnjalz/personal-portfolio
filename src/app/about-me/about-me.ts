import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  viewResume() {
    window.open('adhikari-anjal-resume.pdf', '_blank');
  }
}
