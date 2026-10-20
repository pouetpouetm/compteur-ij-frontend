import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {provideNativeDateAdapter} from '@angular/material/core';
import { Accueil } from './pages/accueil/accueil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Accueil],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('compteur-ij-frontend');
}
