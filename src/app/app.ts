import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { AboutMe } from './about-me/about-me';
import { MyProjects } from './components/my-projects/my-projects';
import { MyExperiences } from './components/my-experiences/my-experiences';
import { ContactMe } from './components/contact-me/contact-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, AboutMe, MyProjects, MyExperiences, ContactMe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeSection = signal('about');
  private observer?: IntersectionObserver;
  // parent
  onSectionSelected(section: string) {
    this.activeSection.set(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    //observe if the section is 40% visible, if yes fire callback
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            console.log(entry.target.id);
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => this.observer!.observe(section));
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
