import { Component, model } from '@angular/core';
import { Recap } from './recap/recap';
import { Calendrier } from './calendrier/calendrier';
import { SaisieJournaliere } from './saisie-journaliere/saisie-journaliere';

@Component({
  selector: 'app-accueil',
  imports: [Recap, Calendrier, SaisieJournaliere],
  providers: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
}
