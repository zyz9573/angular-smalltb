import { Component, OnInit } from '@angular/core';
import { Card, CardService } from './card.service';
import { CardColor } from './card-color.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card : Card;

  constructor(private cardService : CardService) {
  }

  ngOnInit() {
    this.card = new Card(CardColor.spade, 1, true);
    this.cardService.showCard(this.card);
  }

}