import { Injectable } from '@angular/core';
import { Deck, Flashcard } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  cache!: Record<string, Deck>;
  constructor() {
    this.cache = {};
  }

  getDecksSummary() {
    let result = [];
    for (let k in this.cache) {
      result.push({
        name: this.cache[k].title,
        numberOfCards: this.cache[k].flashcards.length,
      });
    }
    return result;
  }

  addNewDeckFromFile(deckName: string, file: File, delim: string) {
    let flashcards: Flashcard[] = [];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const rows = content.split('\n');

        rows.forEach((row) => {
          const columns = row.split(delim);
          flashcards.push({ front: columns[0], back: columns[1] } as Flashcard);
        });
        this.cache[deckName] = {
          flashcards: flashcards,
          title: deckName,
          score: 0,
        } as Deck;
      };

      reader.readAsText(file);
    }
  }

  getDecks(deckName: string) {
    return this.cache[deckName];
  }
}
