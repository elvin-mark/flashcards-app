import { Component } from '@angular/core';
import { Deck, Flashcard } from 'src/app/models';
import { FlashcardsService } from 'src/app/shared/services/flashcards.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent {
  currentCard!: Flashcard;
  currentDeck!: Deck;
  currentIndex: number = 0;
  constructor(private flashcardsService: FlashcardsService) {
    let deck = this.flashcardsService.getDecks('new');
    if (deck) {
      this.currentDeck = deck;
      this.currentIndex = 0;
      this.currentCard = deck.flashcards[0];
    }
  }

  nextCard() {
    this.currentIndex += 1;
    this.currentCard = this.currentDeck.flashcards[this.currentIndex];
  }

  previousCard() {
    this.currentIndex -= 1;
    this.currentCard = this.currentDeck.flashcards[this.currentIndex];
  }

  isFirstCard() {
    return this.currentIndex == 0;
  }

  isLastCard() {
    return this.currentDeck?.flashcards.length == this.currentIndex + 1;
  }
}
