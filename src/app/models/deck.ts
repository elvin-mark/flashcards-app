import { Flashcard } from './flashcard';

export interface Deck {
  title: string;
  flashcards: Flashcard[];
  score: number;
}
