import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  flipped: boolean = false;
  @Input() front: string = 'front';
  @Input() back: string = 'back';
  flipCard() {
    this.flipped = !this.flipped;
  }
}
