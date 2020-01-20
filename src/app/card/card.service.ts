import { Injectable } from '@angular/core';
import { CardColor} from './card-color.enum';

export class Card {
  color : CardColor;
  num : number;
  isHidden : boolean;
  owner : String

  constructor(color : CardColor, num : number , isHidden : boolean) {
    this.color = color;
    this.num = num;
    this.isHidden = true;
    this.owner = 'dealer';
  }
}

@Injectable({
  providedIn : 'root',
})
export class CardService {

  constructor() { }

  showCard(card : Card) {
    card.isHidden = false;
  }

  hideCard(card :Card) {
    card.isHidden = true;
  }

}