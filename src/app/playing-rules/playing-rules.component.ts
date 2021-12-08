import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-playing-rules',
  templateUrl: './playing-rules.component.html',
  styleUrls: ['./playing-rules.component.scss']
})
export class PlayingRulesComponent implements OnChanges {

  @Input() lastCard: any;
  cardNumber: number = 13
  currentPlayingRule: number = 13;

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'drink mate' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'drink mal wat' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    { title: 'Playing Rules', description: 'Here you can find your drinking task' }
  ];

  constructor() { }

  ngOnChanges(): void {
    if (this.lastCard.length > 0) {
      this.cardNumber = parseInt(this.lastCard[0].slice(-1));
    }    
  }
}
