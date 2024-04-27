import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;
  title = 'flashcards-app';

  constructor(private router: Router) {}

  goToDatasets() {
    this.router.navigate(['datasets']);
    this.drawer.toggle();
  }

  goToPractice() {
    this.router.navigate(['practice']);
    this.drawer.toggle();
  }

  goToProgress() {
    this.router.navigate(['progress']);
    this.drawer.toggle();
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
