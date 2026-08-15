import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  @Input() activeSection = 'about';
  @Output() sectionSelected = new EventEmitter<string>();

  scrollTo(section: string) {
    this.sectionSelected.emit(section);
  }
}
