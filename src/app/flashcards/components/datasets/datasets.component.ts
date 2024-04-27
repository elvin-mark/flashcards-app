import { Component } from '@angular/core';
import { Flashcard } from 'src/app/models';
import { FlashcardsService } from 'src/app/shared/services/flashcards.service';
@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss'],
})
export class DatasetsComponent {
  constructor(private flashcardsService: FlashcardsService) {}
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    this.flashcardsService.addNewDeckFromFile('new', file!, '\t');
  }

  getDecks() {
    return this.flashcardsService.getDecksSummary();
  }
}
